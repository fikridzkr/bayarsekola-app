import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ConfirmPayment from "./Checkout/ConfirmPayment";
import FinishPayment from "./Checkout/FinishPayment";

const Payment = ({ user_id }) => {
  const [formStep, setFormStep] = useState(0);
  const [bulan, setBulan] = useState([]);
  const userId = user_id;
  const [bulanBayar, setBulanBayar] = useState();
  const [bukti, setBukti] = useState();
  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };
  const validate = Yup.object({
    bulan: Yup.string().required("Pilih Bulan Pembayaran"),
    bukti: Yup.mixed().required("Bukti Wajib Diupload"),
  });
  useEffect(() => {
    Axios.post("http://localhost:3001/bulan", { user_id: user_id })
      .then((res) => {
        setBulan(res.data.bulan);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user_id]);
  return (
    <>
      {formStep === 0 && (
        <Formik
          initialValues={{
            bulan: 0,
            bukti: null,
          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            setBulanBayar(values.bulan);
            setBukti(values.bukti);

            await completeFormStep();
          }}
        >
          {(formik) => (
            <>
              <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                  <Col md={6} sm={12}>
                    <Card className="mx-auto">
                      <Card.Body>
                        <h3>Bayar SPP</h3>
                        <hr />
                        <Form>
                          <div className="mb-4">
                            <label for="bulan">Choose a Month</label>
                            <Field
                              as="select"
                              name="bulan"
                              className="form-control"
                            >
                              <option value="">
                                -- Please Select Month --
                              </option>
                              {bulan.map((values, index) => {
                                return (
                                  <option value={values.bulan_id} key={index}>
                                    {values.bulan} {values.tahun}
                                  </option>
                                );
                              })}
                            </Field>
                            <ErrorMessage
                              component="div"
                              name="bulan"
                              className="error"
                              type="invalid"
                              tooltip
                            />
                          </div>
                          <div>
                            <label for="bukti">Upload Bukti Pembayaran</label>
                            <br />
                            <input
                              type="file"
                              name="bukti"
                              accept=".jpg"
                              onChange={(event) =>
                                formik.setFieldValue(
                                  "bukti",
                                  event.target.files[0]
                                )
                              }
                            />
                            <ErrorMessage
                              component="div"
                              name="bukti"
                              className="error"
                            />
                          </div>

                          <br />

                          <Button
                            variant="outline-success"
                            type="submit"
                            className="mt-3"
                          >
                            Bayar
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </>
          )}
        </Formik>
      )}
      {formStep === 1 && (
        <ConfirmPayment
          userId={userId}
          bulanBayar={bulanBayar}
          bukti={bukti}
          completeFormStep={completeFormStep}
        />
      )}
      {formStep === 2 && <FinishPayment />}
    </>
  );
};

export default Payment;

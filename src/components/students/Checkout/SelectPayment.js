import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory, Link } from "react-router-dom";
import swal from "sweetalert";
import * as Yup from "yup";
const SelectPayment = ({ user_id, completeFormStep }) => {
  const [bulan, setBulan] = useState([]);
  let history = useHistory();
  const date = new Date("year");
  console.log(date);
  const validate = Yup.object({
    bulan: Yup.string().required("Pilih Bulan Pembayaran"),
    bukti: Yup.mixed().required("Bukti Wajib Diupload"),
  });
  // redirect pages
  function handleClick() {
    swal({
      title: "Register your personal data is complete",
      text: "You will be directed to dashboard!",
      icon: "success",
      button: "Okay",
    }).then(() => {
      history.push("/dashboard");
    });
  }
  useEffect(() => {
    Axios.get("http://localhost:3001/bulan")
      .then((res) => {
        setBulan(res.data.bulan);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Formik
      initialValues={{
        user_id: user_id,
        bulan: "1",
        bukti: null,
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        const data = new FormData();
        data.append("user_id", values.user_id);
        data.append("bulan", values.bulan);
        data.append("bukti", values.bukti);
        Axios.put("http://localhost:3001/sppsiswa", data)
          .then(completeFormStep)
          .catch((err) => {
            console.log(err);
          });
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
                          {bulan.map((values, index) => {
                            return (
                              <option value={values.id} key={index}>
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
                            formik.setFieldValue("bukti", event.target.files[0])
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
  );
};

export default SelectPayment;

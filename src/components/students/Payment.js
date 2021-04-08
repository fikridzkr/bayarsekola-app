import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
const Payment = () => {
  const [bulan, setBulan] = useState([]);
  let history = useHistory();

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
        bulan: null,
        bukti: null,
      }}
      onSubmit={(values) => {
        let data = new FormData();
        data.append("is_active", values.is_active);
        data.append("user_id", values.user_id);

        Axios.post("http://localhost:3001/sppsiswa", data)
          .then((res) => {
            console.log(res);
            handleClick();
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      {(formik) => (
        <>
          <Container className="mt-5">
            <Card style={{ width: "50%" }} className="mx-auto">
              <Card.Body>
                <h3>Bayar SPP</h3>
                <hr />
                <Form>
                  <div className="mb-3">
                    <label for="bulan">Choose a Month</label>
                    <Field as="select" name="bulan" className="form-control">
                      {bulan.map((values, index) => {
                        return (
                          <option value={values.id} key={index}>
                            {values.bulan} {values.tahun}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                  <div>
                    <label for="bukti">Upload Bukti Pembayaran</label>
                    <input
                      type="file"
                      name="bukti"
                      onChange={(event) =>
                        formik.setFieldValue("foto", event.target.files[0])
                      }
                    />
                  </div>
                  <br />
                  <Button variant="outline-success" className="mt-3">
                    {" "}
                    Bayar{" "}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </>
      )}
    </Formik>
  );
};

export default Payment;

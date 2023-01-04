import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("url", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      type: Yup.string().equals(["hireMe", "openSource", "other"]),
      comment: Yup.string().min(25).required("Required"),
    }),
  });

  useEffect(() => {
    if (!isLoading && response) {
      onOpen(response.type, response.message);
      if (response.type == "success") {
        formik.resetForm();
      }
    }
  }, [isLoading]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>
                  {" "}
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <>{formik.errors.firstName}</>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>
                  {" "}
                  {formik.touched.email && formik.errors.email ? (
                    <>{formik.errors.email}</>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option style={{ color: "black" }} value="hireMe">
                    Freelance project proposal
                  </option>
                  <option style={{ color: "black" }} value="openSource">
                    Open source consultancy session
                  </option>
                  <option style={{ color: "black" }} value="other">
                    Other
                  </option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>
                  {formik.touched.comment && formik.errors.comment ? (
                    <>{formik.errors.comment}</>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                disabled={isLoading}
              >
                {isLoading ? <Spinner size="lg" /> : "Submit"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;

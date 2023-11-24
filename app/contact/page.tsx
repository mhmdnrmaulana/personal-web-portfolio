import { METADATA } from "@/common/constant/metadata";
import ContactForm from "@/modules/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `Contact ${METADATA.exTitle}`,
  description: `Contact ${METADATA.description}`,
};

export default function Contact() {
  return <ContactForm />;
}

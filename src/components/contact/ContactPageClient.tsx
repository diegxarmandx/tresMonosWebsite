"use client";

import { useState } from "react";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { siteConfig } from "@/lib/site";

interface ContactValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues: ContactValues = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

export const ContactPageClient = () => {
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="py-14 sm:py-20">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Contacto"
          title="Estamos listos para recibirte"
          description="¿Tienes preguntas sobre reservaciones, eventos o catering? Escríbenos."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <form
            className="space-y-4 rounded-3xl border border-brand-night/10 bg-white p-6 shadow-soft"
            onSubmit={(event) => {
              event.preventDefault();
              setIsSubmitting(true);
              setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setValues(initialValues);
              }, 700);
            }}
          >
            <Input
              id="contact-name"
              label="Nombre"
              value={values.name}
              onChange={(event) => setValues({ ...values, name: event.target.value })}
              required
            />
            <Input
              id="contact-email"
              label="Correo electrónico"
              type="email"
              value={values.email}
              onChange={(event) => setValues({ ...values, email: event.target.value })}
              required
            />
            <Input
              id="contact-phone"
              label="Teléfono"
              type="tel"
              value={values.phone}
              onChange={(event) => setValues({ ...values, phone: event.target.value })}
            />
            <Textarea
              id="contact-message"
              label="Mensaje"
              value={values.message}
              onChange={(event) => setValues({ ...values, message: event.target.value })}
              required
            />
            <Button isLoading={isSubmitting} className="w-full">Enviar mensaje</Button>
            {isSuccess ? (
              <p className="rounded-xl bg-brand-palm/10 p-3 text-sm text-brand-night">
                ¡Mensaje enviado! Te responderemos pronto.
              </p>
            ) : null}
          </form>

          <div className="space-y-5 rounded-3xl border border-brand-night/10 bg-brand-sand/40 p-6">
            <div className="space-y-2 text-sm text-brand-night/80">
              <p className="font-semibold text-brand-night">Dirección</p>
              <p>{siteConfig.address}</p>
              <p className="font-semibold text-brand-night">Teléfono</p>
              <p>{siteConfig.phone}</p>
              <p className="font-semibold text-brand-night">Horario</p>
              {siteConfig.hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="h-64 overflow-hidden rounded-2xl border border-brand-night/20 bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.723087066444!2d-67.14121205079904!3d18.201472076817513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c02b3b5342df39f%3A0x37f95f9682f8c6e8!2sTres%20Monos!5e0!3m2!1sen!2spr!4v1774988643663!5m2!1sen!2spr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación de Tres Monos"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

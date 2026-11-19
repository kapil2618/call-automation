"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Pricing() {
  const plan = {
    name: "Wholesale Partner",
    desc: "Everything you need to deploy an AI dispatcher for one home service client.",
    price: 150,
    features: [
      "100% White-labeled",
      "Keep your retail markup",
      "Zero technical setup",
      "300 AI minutes (~150 calls)",
      "Direct Calendar booking",
      "Instant SMS dispatch",
    ],
  };

  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-7xl px-3 py-16 sm:px-4 sm:py-24 md:px-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 flex flex-col gap-3 text-center sm:mb-16"
      >
        <h2 className="text-3xl font-semibold sm:text-4xl tracking-tighter bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Wholesale Infrastructure Pricing
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground text-center text-lg mt-2">
          A single, flat wholesale rate. You control the retail markup for your plumbing and HVAC clients.
        </p>
      </motion.div>

      {/* Centered single card layout */}
      <div className="mx-auto flex justify-center max-w-md w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          <Card className="relative h-full rounded-3xl border border-border bg-card shadow-2xl">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-2xl font-semibold">
                  {plan.name}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {plan.desc}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold tracking-tighter">
                    ${plan.price}
                  </span>
                  <span className="ml-2 text-sm text-muted-foreground font-medium">
                    / mo / location
                  </span>
                </div>
              </div>

              <Separator className="my-6" />

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm sm:text-base text-muted-foreground"
                  >
                    <CheckIcon className="mr-3 h-5 w-5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="p-6 sm:p-8 pt-0">
              <Button className="w-full text-md py-6 rounded-xl" size="lg">
                Become a Partner
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";
export default function Partners() { const steps = [ { number: "01", title: "You Miss a Call", description: "When your line is busy, you're driving, or you're closed for the night, unanswered calls automatically roll over to Synq.", }, { number: "02", title: "Synq Answers Like a Real Dispatcher", description: "Asks if it's an active septic backup or a routine pump-out, then grabs the homeowner's name, address, and issue.", }, { number: "03", title: "Job Lands on Your Calendar", description: "Confirmed appointments show up straight on your schedule with all the homeowner's details ready for your crew.", }, ];
const guarantees = [ "Keep your current phone number", "We handle 100% of setup", "2-week free test — cancel anytime", ];
return ( <section
id="how-it-works"
className="max-w-4xl w-full mx-auto px-4 py-14 md:px-8 flex flex-col justify-center items-center text-center gap-10"
>
<motion.div
initial={{ y: 20, opacity: 0, filter: "blur(3px)" }}
whileInView={{
y: 0,
opacity: 1,
filter: "blur(0px)",
}}
viewport={{ once: true }}
transition={{ duration: 0.5, type: "spring", bounce: 0 }}
className="flex flex-col gap-2 max-w-xl"
>
<h2 className="text-xl font-semibold sm:text-2xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
How It Works — Without Changing Your Number
</h2>
<p className="text-sm sm:text-base text-muted-foreground">
No new software to learn and no hardware to install. It only picks up when you can&apos;t.
</p>
</motion.div>
  <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
    {steps.map((step, index) => (
      <motion.div
        key={step.number}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          type: "spring",
          bounce: 0,
        }}
        className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
      >
        <span className="text-xs font-semibold tracking-wider text-muted-foreground">
          STEP {step.number}
        </span>
        <h3 className="text-base font-semibold text-foreground">
          {step.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    ))}
  </div>

  <div className="w-full pt-4 border-t border-border flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-xs sm:text-sm text-muted-foreground">
    {guarantees.map((item) => (
      <span key={item} className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
        {item}
      </span>
    ))}
  </div>
</section>
); }

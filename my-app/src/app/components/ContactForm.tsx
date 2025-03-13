// components/ContactForm.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Define the form schema using zod
const formSchema = z.object({
    name: z.string().min(2, {
        message: "Navn må være minst 2 tegn.",
    }),
    email: z.string().email({
        message: "Vennligst skriv inn en gyldig e-postadresse.",
    }),
    message: z.string().min(10, {
        message: "Meldingen må være minst 10 tegn.",
    }),
});

export function ContactForm() {
    // Initialize the form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    // Handle form submission
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                console.log("Message sent!");
                toast("Melding er sendt!");
                form.reset();
            } else {
                console.error("Failed to send message.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-lg mx-auto space-y-6"
            >
                {/* Name Field */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Navn</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ditt navn"
                                    {...field}
                                    className="bg-gray-700 text-white"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Email Field */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-post</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Din e-postadresse"
                                    {...field}
                                    className="bg-gray-700 text-white"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Message Field */}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Melding</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Din melding"
                                    {...field}
                                    className="bg-gray-700 text-white"
                                    rows={5}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600 transition w-max shadow-md p-4"
                >
                    Send melding
                </Button>
            </form>
        </Form>
    );
}

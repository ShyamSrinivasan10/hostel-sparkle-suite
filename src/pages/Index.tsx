import { useMemo } from "react";
import heroImage from "@/assets/hero-hostel.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Users, DollarSign } from "lucide-react";

const stats = [
  { title: "Occupancy", value: "92%", icon: Home },
  { title: "Active Students", value: "348", icon: Users },
  { title: "Monthly Revenue", value: "$42.3k", icon: DollarSign },
];

const Index = () => {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Smart Hostel Management System",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Smart Hostel Management System to manage rooms, students, bookings, maintenance, and payments efficiently.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    }),
    []
  );

  return (
    <div className="space-y-10">
      <header className="relative overflow-hidden rounded-xl p-6 md:p-10 bg-gradient-hero animated-gradient">
        <div className="absolute inset-0 opacity-20" />
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">
              Smart Hostel Management System
            </h1>
            <p className="mt-4 text-primary-foreground/90 max-w-prose">
              Manage rooms, students, bookings, maintenance, and payments from
              a single, modern dashboard.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="hero" size="lg">Get Started</Button>
              <Button variant="secondary" size="lg">View Demo</Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Smart hostel lobby with digital check-in and dashboard"
              className="w-full h-64 md:h-80 object-cover rounded-lg glass-card"
              loading="eager"
            />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.title} className="transition-transform duration-300 hover:-translate-y-0.5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <s.icon className="h-4 w-4 text-primary" /> {s.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold tracking-tight">{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Why Smart Hostel?</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Streamline operations with centralized room allocation, automated
            billing, and maintenance tracking. Enjoy real-time insights into
            occupancy, finances, and student activity.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button>New Booking</Button>
            <Button variant="outline">Add Student</Button>
            <Button variant="soft">Assign Room</Button>
          </CardContent>
        </Card>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default Index;

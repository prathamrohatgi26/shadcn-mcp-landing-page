import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShieldCheck, PlugZap, FlaskConical, LineChart, TrendingUp, Timer } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[100svh] flex flex-col">
      <SiteNavbar />

      {/* Hero Section */}
      <section className="relative flex-1 w-full overflow-hidden">
        {/* Background placeholder for unicorn.studio interactive element */}
        <div aria-hidden className="absolute inset-0 -z-10" id="unicorn-background-placeholder">
          {/* unicorn.studio background mounts here */}
        </div>

        {/* Decorative background blobs */}
        <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 right-1/3 h-[40rem] w-[40rem] rounded-full bg-purple-500/10 blur-3xl" />

        <div className="mx-auto h-[100svh] w-[80vw] px-4 sm:px-6 lg:px-8">
          <div className="h-full grid grid-rows-[1fr_auto]">
            <div />
            <div className="pb-16 sm:pb-20 md:pb-24">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-[16ch]">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-[shine_4s_ease-in-out_infinite] [background-size:200%_auto]">
                  INTELLIGENT ANALYTICS, FINALLY.
                </span>
              </h1>
              <div className="mt-6 flex items-center gap-3">
                <Button size="lg" className="px-6 py-6 text-base md:text-lg">Try it out</Button>
                <Button size="lg" variant="secondary" className="px-6 py-6 text-base md:text-lg">Learn more</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20">
        <div className="mx-auto w-[80vw] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Badge className="mb-2">Why StatsAI</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Turn traffic into revenue</h2>
          <p className="text-muted-foreground mt-2 max-w-[60ch]">AI-driven insights, session replays, and predictive funnels so your team can move from dashboards to decisions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Autonomous Insights</CardTitle>
              <CardDescription>Get daily digests of what changed and why.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Our models summarize anomalies, user cohorts, and drop-off points so you don’t have to hunt.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Predictive Funnels</CardTitle>
              <CardDescription>Forecast conversions and LTV with accuracy.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">See which experiments will pay off before you commit engineering time.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Session Intelligence</CardTitle>
              <CardDescription>Auto-cluster replays by user intent.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Stop scrubbing through hours of video—jump straight to moments that matter.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Zero-ETL</CardTitle>
              <CardDescription>No pipelines. Plug and go.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Client SDK + server-side connectors sync events securely in minutes.</p>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="w-full py-16">
        <div className="mx-auto w-[80vw] px-4 sm:px-6 lg:px-8">
        <div className="mx-4 sm:mx-6 lg:mx-8 rounded-2xl bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border border-border/40 shadow-lg shadow-black/5 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '2.4x', label: 'Faster experiments', Icon: LineChart },
              { value: '38%', label: 'Lift in conversions', Icon: TrendingUp },
              { value: '<7min', label: 'Avg time-to-insight', Icon: Timer },
              { value: '99.99%', label: 'Uptime', Icon: ShieldCheck },
            ].map(({ value, label, Icon }) => (
              <div key={label} className="text-center space-y-2">
                <div className="mx-auto size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <Icon className="size-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold tracking-tight">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20">
        <div className="mx-auto w-[80vw] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Badge className="mb-2" variant="secondary">Loved by teams</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">What customers say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Aditi", "Marcus", "Ken"].map((name, i) => (
            <Card key={i}>
              <CardHeader className="flex-row items-center gap-3">
                <Avatar>
                  <AvatarImage src={`https://i.pravatar.cc/100?img=${i+3}`} alt={name} />
                  <AvatarFallback>{name.substring(0,2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{name} • Growth Lead</CardTitle>
                  <CardDescription>Series B SaaS</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">“StatsAI replaced three tools and freed up our analysts. We ship growth experiments twice as fast now.”</p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20">
        <div className="mx-auto w-[80vw] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Badge className="mb-2">Pricing</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Simple, scalable plans</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter */}
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Everything you need to get insights.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$0</div>
              <p className="text-sm text-muted-foreground">Up to 5k sessions/mo</p>
              <Separator className="my-4" />
              <ul className="text-sm space-y-2">
                <li>Basic dashboards</li>
                <li>Standard replays</li>
                <li>Email support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get started</Button>
            </CardFooter>
          </Card>
          {/* Pro */}
          <Card className="border-primary/40">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Pro</CardTitle>
                <Badge>Popular</Badge>
              </div>
              <CardDescription>Advanced analytics for growing teams.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$79</div>
              <p className="text-sm text-muted-foreground">Up to 100k sessions/mo</p>
              <Separator className="my-4" />
              <ul className="text-sm space-y-2">
                <li>Autonomous insights</li>
                <li>Predictive funnels</li>
                <li>Priority support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Pro</Button>
            </CardFooter>
          </Card>
          {/* Enterprise */}
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>Security, SSO, and custom SLAs.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">Custom</div>
              <p className="text-sm text-muted-foreground">Unlimited scale</p>
              <Separator className="my-4" />
              <ul className="text-sm space-y-2">
                <li>Dedicated environments</li>
                <li>Solutions engineering</li>
                <li>24/7 support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">Contact sales</Button>
            </CardFooter>
          </Card>
        </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20">
        <div className="mx-auto w-[80vw] px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Badge className="mb-2" variant="secondary">FAQ</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Answers to common questions</h2>
          <p className="text-muted-foreground mt-2 max-w-[60ch]">Everything you need to know about integrating, security, and getting started.</p>
        </div>
        <div className="rounded-xl border p-2 sm:p-4 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Accordion type="single" collapsible defaultValue="q1" className="w-full">
            <AccordionItem value="q1" className="rounded-lg border mb-3 data-[state=open]:bg-accent/5 transition-colors">
              <AccordionTrigger className="px-4 md:px-6 text-base md:text-lg">
                <span className="flex items-center gap-3">
                  <PlugZap className="size-4 text-muted-foreground" />
                  How does StatsAI integrate with my stack?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 text-sm text-muted-foreground">
                We provide a lightweight client SDK and server-side connectors for popular data stores. No ETL required.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="rounded-lg border mb-3 data-[state=open]:bg-accent/5 transition-colors">
              <AccordionTrigger className="px-4 md:px-6 text-base md:text-lg">
                <span className="flex items-center gap-3">
                  <ShieldCheck className="size-4 text-muted-foreground" />
                  Is my data secure?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 text-sm text-muted-foreground">
                Yes—SOC 2 practices, encryption at rest and in transit, per-tenant isolation, and role-based access.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3" className="rounded-lg border mb-1 data-[state=open]:bg-accent/5 transition-colors">
              <AccordionTrigger className="px-4 md:px-6 text-base md:text-lg">
                <span className="flex items-center gap-3">
                  <FlaskConical className="size-4 text-muted-foreground" />
                  Can I try before purchasing?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 text-sm text-muted-foreground">
                Absolutely. Start on Starter for free and upgrade anytime. Pro trials are available by request.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full py-20">
        <div className="mx-auto w-[80vw] px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Get product updates</h3>
              <p className="text-sm text-muted-foreground mt-1">Join the StatsAI newsletter for release notes and growth tactics.</p>
            </div>
            <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <div className="grid gap-1">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" required aria-label="Email" className="h-12 md:h-14 text-base md:text-lg px-4" />
              </div>
              <Button size="lg" className="h-12 md:h-14 px-6 text-base md:text-lg">Subscribe</Button>
            </form>
          </div>
        </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

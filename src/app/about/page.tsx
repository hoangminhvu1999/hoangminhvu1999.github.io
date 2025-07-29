import { FC } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const AVATAR_URL = "https://ui-avatars.com/api/?name=Minh+Vu&background=0D8ABC&color=fff&size=128";

const AboutPage: FC = () => {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 flex flex-col gap-8 animate-fade-in">
      {/* Profile Card */}
      <Card className="flex flex-col items-center p-8 gap-4 shadow-lg">
        <Avatar className="h-24 w-24 mb-2 ring-4 ring-primary ring-offset-2">
          <AvatarImage src={AVATAR_URL} alt="Minh Vu" />
          <AvatarFallback>MV</AvatarFallback>
        </Avatar>
        <CardHeader className="items-center text-center p-0">
          <CardTitle className="text-3xl font-bold tracking-tight">Hi, I&apos;m Minh Vu</CardTitle>
          <CardDescription className="text-lg mt-2">Android Developer & Mobile Enthusiast</CardDescription>
        </CardHeader>
        <div className="flex gap-2 mt-2">
          <Badge variant="secondary">Android</Badge>
          <Badge variant="secondary">Kotlin</Badge>
          <Badge variant="secondary">Jetpack Compose</Badge>
          <Badge variant="secondary">UI/UX</Badge>
        </div>
        <div className="flex gap-3 mt-4">
          <Button asChild variant="outline" size="icon" className="hover:bg-blue-50 transition">
            <Link href="mailto:your.email@example.com" aria-label="Email">
              <Mail className="text-blue-600" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="hover:bg-gray-100 transition">
            <Link href="https://github.com/hoangminhvu1999" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="hover:bg-blue-100 transition">
            <Link href="https://linkedin.com/in/hoangminhvu1999" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="text-blue-700" />
            </Link>
          </Button>
        </div>
      </Card>

      {/* Professional Background */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Professional Background</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4 space-y-2">
          <p>
            With <span className="font-semibold">4 years</span> of hands-on experience in Android development, I&apos;ve contributed to a variety of projects ranging from consumer apps to enterprise solutions. My expertise spans <span className="font-semibold">Kotlin</span>, <span className="font-semibold">Java</span>, <span className="font-semibold">Jetpack Compose</span>, and modern Android architectures. I&apos;ve worked with cross-functional teams to deliver high-quality, scalable, and user-centric applications.
          </p>
          <p>
            I have a strong background in UI/UX, performance optimization, and integrating RESTful APIs, as well as experience with Firebase, Room, and third-party libraries.
          </p>
        </CardContent>
      </Card>

      {/* Why This Website? */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Why This Website?</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4">
          <p>
            This portfolio and blog is a space to showcase my work, share insights, and connect with fellow developers and potential collaborators. Here, you&apos;ll find my latest projects, technical articles, and resources for Android development.
          </p>
        </CardContent>
      </Card>

      {/* Interests */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>What I’m Interested In</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4">
          <p>
            I love exploring new Android technologies, mobile UI/UX trends, and best practices in software engineering. I&apos;m especially interested in Jetpack Compose, app architecture, and performance tuning. I enjoy writing about my learning journey and sharing tips with the community.
          </p>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="shadow-md bg-gradient-to-r from-primary to-secondary border border-primary">
        <CardHeader className="items-center text-center">
          <CardTitle className="text-2xl text-primary-foreground">Let&apos;s Connect!</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4 flex flex-col items-center gap-3">
          <p className="mb-2 text-primary-foreground">
            Feel free to <Link href="/resume" className="underline hover:text-blue-200 transition">view my resume</Link>, check out my <Link href="/blog" className="underline hover:text-blue-200 transition">blog posts</Link>, or <Link href="mailto:your.email@example.com" className="underline hover:text-blue-200 transition">get in touch</Link> if you&apos;d like to collaborate or just say hi!
          </p>
        </CardContent>
      </Card>
    </main>
  );
};

export default AboutPage;

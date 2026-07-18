import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contactChannels } from "../lib/contact-channels";

export function ContactChannels() {
  return (
    <div className="flex flex-col gap-4">
      {contactChannels.map((channel) => {
        const card = (
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-start gap-3">
              <channel.icon className="mt-0.5 size-4 text-primary" />
              <div className="flex flex-col gap-1">
                <CardTitle className="text-base">{channel.title}</CardTitle>
                <CardDescription>{channel.detail}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        );

        if (channel.href) {
          return (
            <a
              key={channel.title}
              href={channel.href}
              className="block transition-opacity hover:opacity-90"
            >
              {card}
            </a>
          );
        }

        return <div key={channel.title}>{card}</div>;
      })}
    </div>
  );
}

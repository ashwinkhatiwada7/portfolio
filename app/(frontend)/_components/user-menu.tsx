"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { signOut } from "@/lib/authClient";
import { Loader2, LogOutIcon } from "lucide-react";
import { useState } from "react";

export function UserMenu({
  username,
  email,
  imageUrl,
}: {
  username: string;
  email: string;
  imageUrl: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = async () => {
    setIsLoading(true);
    await signOut();
    setIsLoading(false);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={imageUrl} alt="image here" />
            <AvatarFallback>{username.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-2 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium">{username}</p>
          <p className="text-xs text-muted-foreground">{email}</p>
        </div>
        <DropdownMenuItem onClick={handleLogout}>
          <Separator className="my-2" />
          <LogOutIcon className="w-4 h-4" />
          {isLoading ? "Logging out..." : "Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

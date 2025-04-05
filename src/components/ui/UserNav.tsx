
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { User, Settings, LogOut } from "lucide-react";

export function UserNav({ role = "user" }: { role?: "user" | "recruiter" | "admin" }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, this would include logout logic
    navigate("/");
  };

  const goToProfile = () => {
    navigate(`/${role}-dashboard/profile`);
  };

  const goToSettings = () => {
    navigate(`/${role}-dashboard/settings`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full border-2 border-purple-100 p-0">
          <Avatar className="h-9 w-9">
            <AvatarImage src="" />
            <AvatarFallback className="bg-purple-100 text-purple-700 font-medium">
              {role === "user" ? "JS" : role === "recruiter" ? "RC" : "AD"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white shadow-md border border-purple-100" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {role === "user" ? "John Smith" : role === "recruiter" ? "Recruit Co." : "Admin User"}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {role === "user" ? "job.seeker@example.com" : role === "recruiter" ? "recruiter@example.com" : "admin@example.com"}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={goToProfile} className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={goToSettings} className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="text-red-500 cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

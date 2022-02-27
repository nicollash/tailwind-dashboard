import { AiOutlineDashboard, AiOutlineSetting } from "react-icons/ai";
import { MdOutlinePlayLesson, MdChatBubbleOutline } from "react-icons/md";
import { FaChalkboardTeacher, FaRegCalendarAlt } from "react-icons/fa";

export type TMenuItem = {
  label: string;
  icon: React.ReactNode;
  route: string;
};

export const MAIN_MENU: TMenuItem[] = [
  {
    label: "Dashboard",
    icon: <AiOutlineDashboard />,
    route: "/",
  },
  {
    label: "Lessions",
    icon: <MdOutlinePlayLesson />,
    route: "/lessons",
  },
  {
    label: "Teachers",
    icon: <FaChalkboardTeacher />,
    route: "/teachers",
  },
  {
    label: "Calendar",
    icon: <FaRegCalendarAlt />,
    route: "/calendar",
  },
  {
    label: "Chat",
    icon: <MdChatBubbleOutline />,
    route: "/chat",
  },
];

export const FOOTER_MENU = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
    route: "/settings",
  },
];

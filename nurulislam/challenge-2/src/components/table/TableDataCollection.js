import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleCheck,
  CircleHelp,
  CircleX,
  MoveDown,
  MoveRight,
  MoveUp,
  Timer,
} from "lucide-react";

export const data = [
  {
    id: "m5gr84i9",

    task: "TASK-3942",
    title:
      "You can't hack the monitor without copying the bluetooth SQL protocol!",
    status: "success",
    priority: "",
    created_at: "",
  },
  {
    id: "3u1reuv4",
    task: "TASK-3942",
    title:
      "You can't generate the array without indexing the 1080p AGP transmitter!",
    status: "success",
    priority: "High",
    created_at: "",
  },
  {
    id: "derv1ws0",
    task: "TASK-3942",
    title: "Use the online FTP port, then you can input the 1080p interface!",
    status: "success",
    priority: "Medium",
    created_at: "",
  },
  {
    id: "5kma53ae",
    task: "TASK-3942",
    title:
      "I'll synthesize the wireless SDD bus, that should feed the ASCII alarm!",
    status: "success",
    priority: "Low",
    created_at: "",
  },
  {
    id: "bhqecj4p",
    task: "TASK-3942",
    title:
      "Use the neural DNS system, then you can transmit the open-source port!",
    status: "success",
    priority: "Medium",
    created_at: "",
  },
  {
    id: "bhqecj4p1",
    task: "TASK-3942",
    title:
      "Use the neural DNS system, then you can transmit the open-source port!",
    status: "success",
    priority: "Medium",
    created_at: "",
  },
  {
    id: "bhqecj4p2",
    task: "TASK-3942",
    title:
      "Use the neural DNS system, then you can transmit the open-source port!",
    status: "success",
    priority: "Medium",
    created_at: "",
  },
];

export const statusData = [
  {
    value: "todo",
    icon: <CircleHelp />,
    label: "Todo",
  },
  {
    value: "in-progress",
    label: "In-progress",
    icon: <Timer />,
  },
  {
    value: "done",
    label: "Done",
    icon: <CircleCheck />,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: <CircleX />,
  },
];
export const priorityData = [
  {
    value: "low",
    icon: <MoveDown />,
    label: "Low",
  },
  {
    value: "medium",
    label: "Medium",
    icon: <MoveRight />,
  },
  {
    value: "high",
    label: "High",
    icon: <MoveUp />,
  },
];

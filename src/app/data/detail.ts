export const LEADS = [
    {
        id: 1,
        Date: "12:00 PM",
        customer: "Jane Cooper",
        condition: "Neck Pain",
        email: "jane@microsoft.com",
        contact: "(225) 555-0118"
    },
    {
        id: 2,
        Date: "11/01/2024",
        customer: "Floyd Miles",
        condition: "Neck Pain",
        email: "floyd@yahoo.com",
        contact: "(205) 555-0100"
    },
    {
        id: 3,
        Date: "11/01/2024",
        customer: "Ronald Richards",
        condition: "Neuropathy",
        email: "ronald@adobe.com",
        contact: "(302) 555-0107"
    },
    {
        id: 4,
        Date: "11/01/2024",
        customer: "Marvin McKinney",
        condition: "Knee Pain",
        email: "marvin@tesla.com",
        contact: "(252) 555-0126"
    },
    {
        id: 5,
        Date: "11/01/2024",
        customer: "Jerome Bell",
        condition: "Arthritis",
        email: "jerome@google.com",
        contact: "(629) 555-0129"
    },
    {
        id: 6,
        Date: "11/01/2024",
        customer: "Kathryn Murphy",
        condition: "Neuropathy",
        email: "kathryn@microsoft.com",
        contact: "(406) 555-0120"
    },
    {
        id: 7,
        Date: "11/01/2024",
        customer: "Jacob Jones",
        condition: "Neck Pain",
        email: "jacob@yahoo.com",
        contact: "(208) 555-0112"
    },
    {
        id: 8,
        Date: "11/01/2024",
        customer: "Kristin Watson",
        condition: "Back Pain",
        email: "kristin@facebook.com",
        contact: "(704) 555-0127"
    }
]




// for  contacts
// import p1 from "../../../public/ProfileImages/p1.png";
// import p2 from "../../../public/ProfileImages/p2.png";
// import p3 from "../../../public/ProfileImages/p3.png";
// import p4 from "../../../public/ProfileImages/p4.png";
// import p5 from "../../../public/ProfileImages/p5.png";
// import p6 from "../../../public/ProfileImages/p6.png";
// import p7 from "../../../public/ProfileImages/p7.png";
// import { StaticImageData } from "next/image";
// export type Contact = {
//     id: number;
//     name: string;
//     message: string;
//     time: string;
//     unreadCount: number;
//     image: StaticImageData;
//   };
// export const contacts:Contact[] = [
//     {
//         id: 1,
//         name: "Andreana Viola",
//         message: "Hi, How are you today?",
//         time: "1m ago",
//         unreadCount: 2,
//         image: p1,
//       },
//       {
//         id: 2,
//         name: "Francesco Long",
//         message: "Hi @Angel, I hope you are doing well.",
//         time: "2h ago",
//         unreadCount: 1,
//         image: p2,
//       },
//       {
//         id: 3,
//         name: "Alexandra Michu",
//         message: "Hi, How are you today?",
//         time: "09:00",
//         unreadCount: 0,
//         image: p3,
//       },
//       {
//         id: 4,
//         name: "Hwang Lee",
//         message: "I hope it will be finished soon",
//         time: "Today",
//         unreadCount: 0,
//         image: p4,
//       },
//       {
//         id: 5,
//         name: "Maximillian",
//         message: "You: you are absolutely right!",
//         time: "23/11",
//         unreadCount: 0,
//         image: p5,
//       },
//       {
//         id: 6,
//         name: "Xiao Ming",
//         message: "Hi, How are you today?",
//         time: "23/11",
//         unreadCount: 0,
//         image: p6,
//       },
//       {
//         id: 7,
//         name: "Xiao Ming",
//         message: "Okay, Great!",
//         time: "23/11",
//         unreadCount: 0,
//         image: p7,
//       },
//   ];
// data/detail.js
import { StaticImageData } from 'next/image';
export type Contact = {
    id: number;
    name: string;
    message: string;
    time: string;
    unreadCount: number;
    image: StaticImageData;
  };
import ProfileImage1 from '/public/ProfileImages/p1.png';
import ProfileImage2 from '/public/ProfileImages/p2.png';
import ProfileImage3 from '/public/ProfileImages/p3.png';
import ProfileImage4 from '/public/ProfileImages/p4.png';
import ProfileImage5 from '/public/ProfileImages/p5.png';
import ProfileImage6 from '/public/ProfileImages/p6.png';
import ProfileImage7 from '/public/ProfileImages/p7.png';

export const contacts = [
  {
    id: 1,
    name: "Andreana Viola",
    message: "Hi, How are you today?",
    time: "1m ago",
    unreadCount: 2,
    image: ProfileImage1,
    chatHistory: [
      { sender: "Andreana Viola", message: "Hi, How are you today?", time: "9:00 AM" },
      { sender: "You", message: "I'm doing well, thanks!", time: "9:05 AM" },
      { sender: "Andreana Viola", message: "Can you send a sample for reference?", time: "9:10 AM" },
    ],
  },
  {
    id: 2,
    name: "Francesco Long",
    message: "Hey! Are you free for a call?",
    time: "2h ago",
    unreadCount: 1,
    image: ProfileImage2,
    chatHistory: [
      { sender: "Francesco Long", message: "Hey! Are you free for a call?", time: "8:30 AM" },
      { sender: "You", message: "Sure, let's connect.", time: "8:35 AM" },
      { sender: "Francesco Long", message: "Great, speak soon!", time: "8:40 AM" },
    ],
  },
  {
    id: 3,
    name: "Alexandra Michu",
    message: "Can you check the report?",
    time: "09:00",
    unreadCount: 0,
    image: ProfileImage3,
    chatHistory: [
      { sender: "Alexandra Michu", message: "Can you check the report?", time: "7:55 AM" },
      { sender: "You", message: "Yes, I'll review it soon.", time: "8:00 AM" },
      { sender: "Alexandra Michu", message: "Thank you!", time: "8:05 AM" },
    ],
  },
  {
    id: 4,
    name: "Hwang Lee",
    message: "I hope it will be finished soon",
    time: "Today",
    unreadCount: 0,
    image: ProfileImage4,
    chatHistory: [
      { sender: "Hwang Lee", message: "I hope it will be finished soon.", time: "10:15 AM" },
      { sender: "You", message: "We're on track!", time: "10:17 AM" },
    ],
  },
  {
    id: 5,
    name: "Maximillian",
    message: "You are absolutely right!",
    time: "23/11",
    unreadCount: 0,
    image: ProfileImage5,
    chatHistory: [
      { sender: "Maximillian", message: "I think we're on the right path.", time: "Yesterday, 2:00 PM" },
      { sender: "You", message: "You are absolutely right!", time: "Yesterday, 2:05 PM" },
      { sender: "Maximillian", message: "Glad we're aligned.", time: "Yesterday, 2:10 PM" },
    ],
  },
  {
    id: 6,
    name: "Xiao Ming",
    message: "Can we meet later today?",
    time: "23/11",
    unreadCount: 0,
    image: ProfileImage6,
    chatHistory: [
      { sender: "Xiao Ming", message: "Can we meet later today?", time: "Yesterday, 3:15 PM" },
      { sender: "You", message: "Yes, let's confirm a time.", time: "Yesterday, 3:20 PM" },
      { sender: "Xiao Ming", message: "Thank you!", time: "Yesterday, 3:25 PM" },
    ],
  },
  {
    id: 7,
    name: "Kristin Watson",
    message: "Let me know if you need more info.",
    time: "Yesterday",
    unreadCount: 3,
    image: ProfileImage7,
    chatHistory: [
      { sender: "Kristin Watson", message: "Let me know if you need more info.", time: "Yesterday, 4:00 PM" },
      { sender: "You", message: "Got it, will do.", time: "Yesterday, 4:05 PM" },
      { sender: "Kristin Watson", message: "Thanks so much!", time: "Yesterday, 4:10 PM" },
    ],
  },
];

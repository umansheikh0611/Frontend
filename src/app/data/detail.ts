export const LEADS = [
    {
        id: 1,
        Date: "12:00 PM",
        customer: "Jane Cooper",
        condition: "Neck Pain",
        email: "jane@microsoft.com",
        contact: "(225) 555-0118",
        status:"active",
    },
    {
        id: 2,
        Date: "11/01/2024",
        customer: "Floyd Miles",
        condition: "Neck Pain",
        email: "floyd@yahoo.com",
        contact: "(205) 555-0100",
        status:"active",
    },
    {
        id: 3,
        Date: "11/01/2024",
        customer: "Ronald Richards",
        condition: "Neuropathy",
        email: "ronald@adobe.com",
        contact: "(302) 555-0107",
        status:"inactive",
    },
    {
        id: 4,
        Date: "11/01/2024",
        customer: "Marvin McKinney",
        condition: "Knee Pain",
        email: "marvin@tesla.com",
        contact: "(252) 555-0126",
        status:"active",
    },
    {
        id: 5,
        Date: "11/01/2024",
        customer: "Jerome Bell",
        condition: "Arthritis",
        email: "jerome@google.com",
        contact: "(629) 555-0129",
        status:"inactive",
    },
    {
        id: 6,
        Date: "11/01/2024",
        customer: "Kathryn Murphy",
        condition: "Neuropathy",
        email: "kathryn@microsoft.com",
        contact: "(406) 555-0120",
        status:"active",
    },
    {
        id: 7,
        Date: "11/01/2024",
        customer: "Jacob Jones",
        condition: "Neck Pain",
        email: "jacob@yahoo.com",
        contact: "(208) 555-0112",
        status:"inactive",
    },
    {
        id: 8,
        Date: "11/01/2024",
        customer: "Kristin Watson",
        condition: "Back Pain",
        email: "kristin@facebook.com",
        contact: "(704) 555-0127",
        status:"active",
    }
]






import { StaticImageData } from 'next/image';
export type Contact = {
    id: number;
    name: string;
    message: string;
    time: string;
    unreadCount: number;
    image: StaticImageData;
    condition: string,
    email: string,
    contact: string,
    status: string,
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
    condition: "Knee Pain",
    email: "andreana@domain.com",
    contact: "(252) 555-0126",
    status: "active",
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
    condition: "Back Pain",
    email: "francesco@domain.com",
    contact: "(323) 555-0341",
    status: "active",
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
    condition: "Migraine",
    email: "alexandra@domain.com",
    contact: "(415) 555-0547",
    status: "inactive",
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
    condition: "Stress",
    email: "hwanglee@domain.com",
    contact: "(212) 555-0487",
    status: "active",
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
    condition: "No condition",
    email: "maximillian@domain.com",
    contact: "(509) 555-0271",
    status: "inactive",
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
    condition: "Fatigue",
    email: "xiaoming@domain.com",
    contact: "(323) 555-0111",
    status: "active",
    chatHistory: [
      { sender: "Xiao Ming", message: "Can we meet later today?", time: "Yesterday, 3:15 PM" },
      { sender: "You", message: "Yes, let's confirm a time.", time: "Yesterday, 3:20 PM" },
      { sender: "Xiao Ming", message: "Thank you!", time: "Yesterday, 3:25 PM" },
    ],
  },
 
  {
    id: 8,
    name: "Liam Harrison",
    message: "Have you seen the new design?",
    time: "3d ago",
    unreadCount: 0,
    image: ProfileImage6,
    condition: "No condition",
    email: "liam@domain.com",
    contact: "(404) 555-0690",
    status: "inactive",
    chatHistory: [
      { sender: "Liam Harrison", message: "Have you seen the new design?", time: "Yesterday, 5:00 PM" },
      { sender: "You", message: "Yes, it looks great!", time: "Yesterday, 5:05 PM" },
    ],
  },
  {
    id: 9,
    name: "Isabella Roberts",
    message: "Let's finalize the project details.",
    time: "2d ago",
    unreadCount: 1,
    image: ProfileImage2,
    condition: "Anxiety",
    email: "isabella@domain.com",
    contact: "(210) 555-0321",
    status: "active",
    chatHistory: [
      { sender: "Isabella Roberts", message: "Let's finalize the project details.", time: "Yesterday, 6:00 PM" },
      { sender: "You", message: "I agree, let's wrap it up.", time: "Yesterday, 6:05 PM" },
    ],
  },
  {
    id: 10,
    name: "Gabriel Foster",
    message: "The meeting has been scheduled.",
    time: "Today",
    unreadCount: 0,
    image: ProfileImage7,
    condition: "No condition",
    email: "gabriel@domain.com",
    contact: "(415) 555-0198",
    status: "active",
    chatHistory: [
      { sender: "Gabriel Foster", message: "The meeting has been scheduled.", time: "Today, 9:30 AM" },
      { sender: "You", message: "Thanks for the update.", time: "Today, 9:35 AM" },
    ],
  },
];


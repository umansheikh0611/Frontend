"use client";

import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import Image from "next/image";
import { contacts, Contact } from "../app/data/detail"; // Importing contacts data and Contact type
import { MdOutlinePhone, MdOutlineInsertEmoticon } from "react-icons/md";
import { BsLayoutSidebarReverse, BsThreeDotsVertical, BsSendFill } from "react-icons/bs";
import { FiLink } from "react-icons/fi";

// Defining the shape of a single chat message
interface ChatMessage {
  sender: string;
  message: string;
  time: string;
}

// Updating Contact to include chatHistory
interface ExtendedContact extends Contact {
  chatHistory: ChatMessage[];
}

export default function Chat() {
  const [selectedContact, setSelectedContact] =
    useState<ExtendedContact | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelectContact = (contact: ExtendedContact) => {
    setSelectedContact(contact);
    setIsChatOpen(true);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle the sidebar visibility
  };

  return (
    <section>
      <div className="w-full flex relative">
        {/* Contacts List */}
        <div
          className={`w-full lg:w-[330px] bg-gray-50 p-3 flex flex-col gap-2 ${
            isChatOpen ? "hidden lg:flex" : ""
          }`}
        >
          <div className="flex px-2 justify-between">
            <h2 className="text-2xl font-bold">Chat</h2>
            <div className="bg-blue-600 p-1 rounded">
              <IoAdd className="text-2xl text-white" />
            </div>
          </div>

          <div className="messaging-container flex flex-col">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => handleSelectContact(contact)}
                className="flex items-center p-2 hover:bg-blue-400 bg-white border-b gap-2 rounded cursor-pointer"
              >
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <Image
                    src={contact.image}
                    alt={contact.name}
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col w-40">
                  <h3 className="text-1xl font-bold truncate">
                    {contact.name}
                  </h3>
                  <p className="text-sm truncate">{contact.message}</p>
                </div>
                <div className="flex flex-col justify-center text-center items-center gap-1 text-sm">
                  <p>{contact.time}</p>
                  {contact.unreadCount > 0 && (
                    <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                      {contact.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder when no chat is open */}
        {!selectedContact && (
          <div className="w-full items-center justify-center hidden lg:flex">
            <div className="text-center p-10">
              <h2 className="text-2xl font-bold text-gray-500">
                Select a chat to start messaging
              </h2>
              <p className="text-gray-400 mt-2">
                Choose a contact from the left to view and start a conversation.
              </p>
            </div>
          </div>
        )}

        {/* Chat Box */}
        {selectedContact && (
          <div className="flex w-full">
            <div
              className={`w-full h-full bg-white border flex flex-col p-3 ${
                !isChatOpen ? "hidden lg:flex" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <Image
                      src={selectedContact.image}
                      alt={selectedContact.name}
                      width={50}
                      height={50}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-1xl font-bold">{selectedContact.name}</h3>
                    <p className="text-sm text-gray-500">Online</p>
                  </div>
                </div>
                <div className="flex gap-6 bg-gray-100 p-3 rounded-xl text-xl">
                  <MdOutlinePhone />
                  <BsLayoutSidebarReverse onClick={toggleSidebar} />
                  <BsThreeDotsVertical />
                </div>
              </div>

              {/* Chat Messages */}
              <div className="w-full h-full bg-gray-100 mt-5 rounded-xl p-4 overflow-y-auto sm:h-[70vh]">
                {selectedContact.chatHistory.length === 0 ? (
                  <div className="w-full flex items-center justify-center">
                    <div className="text-center p-10">
                      <h2 className="text-2xl font-bold text-gray-500">
                        End-to-End Encrypted
                      </h2>
                      <p className="text-gray-400 mt-2">
                        No messages here yet. Start a conversation with{" "}
                        {selectedContact.name}!
                      </p>
                    </div>
                  </div>
                ) : (
                  selectedContact.chatHistory.map((chat, index) => (
                    <div
                      key={index}
                      className={`flex w-full ${
                        chat.sender === "You" ? "justify-end" : "justify-start"
                      } mb-4`}
                    >
                      <div className="flex items-end gap-2">
                        {chat.sender === "You" && (
                          <span className="text-xs text-gray-500">{chat.time}</span>
                        )}
                        <div
                          className={`p-3 rounded-lg shadow ${
                            chat.sender === "You"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-700"
                          }`}
                          style={{ maxWidth: "90%" }}
                        >
                          <p>{chat.message}</p>
                        </div>
                        {chat.sender !== "You" && (
                          <span className="text-xs text-gray-500">{chat.time}</span>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Input Box */}
              <div className="flex items-center gap-2">
                <div className="w-full flex justify-between items-center border rounded-xl">
                  <input
                    type="text"
                    placeholder="Write your message..."
                    className="w-full p-2"
                  />
                  <div className="flex gap-3 px-5">
                    <MdOutlineInsertEmoticon />
                    <FiLink />
                  </div>
                </div>
                <button className="py-2 px-3 bg-blue-700 text-white rounded-xl">
                  <BsSendFill />
                </button>
              </div>
            </div>

            {/* User Info */}
            <div
              className={`w-[300px] h-full bg-[#fafafa] p-5 border flex flex-col ${
                isSidebarOpen ? "block absolute top-0 right-0 h-screen  " : "hidden"
              } lg:block  `}
            >
             <div className="flex flex-col gap-5" >
             <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-700">User Info</h2>
                <BsLayoutSidebarReverse onClick={toggleSidebar}  className={`${isSidebarOpen ? "block" : "hidden"}`}/>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-700">Name</h3>
                  <span className="text-right">{selectedContact.name}</span>
                </li>
                <li className="flex items-center justify-between gap-5">
                  <h3 className="text-sm font-bold text-gray-700">Email</h3>
                  <span className="text-right">{selectedContact.email}</span>
                </li>
                <li className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-700">Phone</h3>
                  <span className="text-right">{selectedContact.contact}</span>
                </li>
                <li className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-700">Status</h3>
                  <span className="text-right">{selectedContact.status}</span>
                </li>
              </ul>
              <div className="flex flex-col gap-4 justify-center text-center">
                <h1 className="text-lg font-bold text-gray-700">About</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  deserunt perspiciatis eaque impedit quisquam.
                </p>
              </div>
             </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

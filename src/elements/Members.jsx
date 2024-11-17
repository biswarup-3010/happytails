import React, { useContext, useState } from "react";
import { memberContext } from "../contexts/context";
function Members() {
  const [selectedMember, setSelectedMember] = useState(null);
  const value = useContext(memberContext);
  return (
    <div className="min-h-screen p-2">
      <h1 className="text-3xl font-bold text-center colour-1 mb-8">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {value.memberFile.map((member) => (
          <div
            key={member.id}
            className="bg-colour-1 rounded-lg shadow-lg p-5 cursor-pointer hover:shadow-xl transition border-b border-r border-gray-400"
            onClick={() => setSelectedMember(member)}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-bold text-center">{member.name}</h2>
            <p className="text-sm text-gray-600 text-center">{member.role}</p>
          </div>
        ))}
      </div>
      {selectedMember && (
        <div className="fixed inset-0 bg-red-100 bg-opacity-95 flex justify-center items-center">
          <div className="bg-gray-700 rounded-lg w-96 p-6 shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedMember(null)}
            >
              ✕
            </button>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold text-center">
              {selectedMember.name}
            </h2>
            <p className="text-center text-gray-600">{selectedMember.role}</p>
            <p className="mt-4 text-gray-700">{selectedMember.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Members;

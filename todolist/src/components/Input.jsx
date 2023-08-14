import React from 'react'

const Input = () => {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        className="border p-2 rounded w-60"
        placeholder="Enter something"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        ADD
      </button>
    </div>
  )
}

export default Input

import React from 'react'

const TaskBar = () => {
  return (
     <div
      className="
        h-12
        sm:h-8

        bg-zinc-900/80
        backdrop-blur-md
        border-t
        border-zinc-700

        flex
        items-center
        justify-between

        px-3
        sm:px-5

        text-white
      "
    >
      <div className="text-sm sm:text-base">
        Start
      </div>

      <div className="text-xs sm:text-sm text-zinc-300">
        Portfolio OS
      </div>
    </div>
  )
}

export default TaskBar
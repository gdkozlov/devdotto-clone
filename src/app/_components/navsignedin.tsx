import { useState } from "react";

import { api } from "~/trpc/react";

export function NavSignedIn() {

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="#" className="flex items-center">
            <img src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" className="h-9"/>
          </a>
          <div className="flex md:order-2">
            <button type="button" data-collapse-toggle="navbar-search"></button>
          </div>
          <div className="flex space-x-2 ml-auto">
            <a href="/api/auth/signout" className="border-2 font-bold border-blue-700 text-sm text-blue-700 px-4 py-1 rounded hover:bg-blue-700 hover:text-white">Sign out</a>
          </div>
        </div>
    </nav>
  )
}
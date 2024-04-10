import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://i.pinimg.com/736x/a3/e9/a1/a3e9a19319b177ac1c0c6f707c647d2d.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
        React development is like Hanuman's flight – powered by unwavering passion
    </h2>
    <p className="mt-6 text-gray-600">
        Just as Hanuman soared through the skies with unmatched fervor, React developers navigate the digital realm with a boundless enthusiasm that knows no bounds. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
    </p>
    <p className="mt-4 text-gray-600">
        Hanuman, the mighty monkey god from Hindu mythology, is often depicted flying through the air with great agility and strength, symbolizing boundless energy and determination.
    </p>
</div>

              </div>
          </div>
      </div>
  );
}
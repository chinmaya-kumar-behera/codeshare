import React from 'react'
import NavigationHandler from '../../handlers/NavigationHandler';

const Home = () => {
  const { navigateToNewUrl } = NavigationHandler();

  return (
    <main className="w-full h-auto bg-gradient-to-b from-[#38343c] to-[#4d77bb]">
      {/* //navbar */}
      <nav className="py-5 px-2 lg:px-5">
        <div className="flex items-center justify-between">
          <div className="max-w-[150px]">
            <img
              src="https://codeshare.io/-/img/codeshare-logo.svg?v=v3.32.2"
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-7 text-md text-gray-300">
            <button>Pricing</button>
            <button>Sign Up</button>
            <button>Log In</button>
          </div>
        </div>
      </nav>

      {/* //heading section */}
      <section className="py-20 space-y-10 text-gray-100">
        <div className="text-center space-y-5">
          <h1 className="text-5xl">Share Code in Real-time with Developers</h1>
          <h5 className="text-2xl">
            An online code editor for interviews, troubleshooting, teaching &
            more…
          </h5>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center">
          <button
            className="px-10 py-4 bg-[#ec3360] text-center hover:bg-[#eb1d4e] rounded text-white"
            onClick={navigateToNewUrl}
          >
            Share Code Now
          </button>
          <span>Share code for free</span>
        </div>
      </section>

      {/* video section */}
      <section className="mx-auto max-w-6xl">
        <div className="w-full flex gap-0 sm:gap-5 lg:gap-10">
          <div className="relative h-[300px] lg:h-[450px] w-full sm:w-2/3">
            <img
              className="h-full w-full"
              src="https://codeshare.io/-/img/example-chrome.png?v=v3.32.2"
              alt="video_background"
            />
            <div className="absolute top-[10%] left-0 w-full h-[90%] p-1">
              <div className="h-full w-full flex justify-between ">
                <div className="">
                  <video
                    src="https://codeshare.io/-/img/example-code.mp4?v=v3.32.2"
                    className="h-[70%]"
                    alt="programming_video"
                    autoPlay
                  />
                </div>
                <div className="w-[30%]">
                  <video
                    src="https://codeshare.io/-/img/example-user1.mp4?v=v3.32.2"
                    className="w-full"
                    alt="programming_video"
                    autoPlay
                  />
                  <div className="flex">
                    <video
                      src="https://codeshare.io/-/img/example-user2.mp4?v=v3.32.2"
                      className="w-1/2"
                      alt="programming_video"
                      autoPlay
                    />
                    <video
                      src="https://codeshare.io/-/img/example-user3.mp4?v=v3.32.2"
                      className="w-1/2"
                      alt="programming_video"
                      autoPlay
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden h-[300px] lg:h-[450px] w-full sm:w-1/3 sm:flex flex-col gap-[4%]">
            <div className="h-[48%] relative">
              <img
                className="h-full w-full"
                src="https://codeshare.io/-/img/example-chrome.png?v=v3.32.2"
                alt="video_background"
              />
              <div className="absolute top-[10%] left-0 w-full h-[90%] p-1">
                <div className="h-full w-full flex justify-between ">
                  <div className="">
                    <video
                      src="https://codeshare.io/-/img/example-code.mp4?v=v3.32.2"
                      className="h-[70%]"
                      alt="programming_video"
                      autoPlay
                    />
                  </div>
                  <div className="w-[30%]">
                    <video
                      src="https://codeshare.io/-/img/example-user1.mp4?v=v3.32.2"
                      className="w-full"
                      alt="programming_video"
                      autoPlay
                    />
                    <div className="flex justify-end">
                      <video
                        src="https://codeshare.io/-/img/example-user2.mp4?v=v3.32.2"
                        className="w-1/2"
                        alt="programming_video"
                        autoPlay
                      />
                      <video
                        src="https://codeshare.io/-/img/example-user3.mp4?v=v3.32.2"
                        className="w-1/2"
                        alt="programming_video"
                        autoPlay
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[48%] relative">
              <img
                className="h-full w-full"
                src="https://codeshare.io/-/img/example-chrome.png?v=v3.32.2"
                alt="video_background"
              />
              <div className="absolute top-[10%] left-0 w-full h-[90%] p-1">
                <div className="h-full w-full flex justify-between ">
                  <div className="">
                    <video
                      src="https://codeshare.io/-/img/example-code.mp4?v=v3.32.2"
                      className="h-[70%]"
                      alt="programming_video"
                      autoPlay
                    />
                  </div>
                  <div className="w-[30%]">
                    <video
                      src="https://codeshare.io/-/img/example-user1.mp4?v=v3.32.2"
                      className="w-full"
                      alt="programming_video"
                      autoPlay
                    />
                    <div className="flex">
                      <video
                        src="https://codeshare.io/-/img/example-user2.mp4?v=v3.32.2"
                        className="w-1/2"
                        alt="programming_video"
                        autoPlay
                      />
                      <video
                        src="https://codeshare.io/-/img/example-user3.mp4?v=v3.32.2"
                        className="w-1/2"
                        alt="programming_video"
                        autoPlay
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-2xl py-20 mx-auto">
        <div className="text-center space-y-5 text-gray-300">
          <p>
            <small>
              Used by software engineers at companies and universities we
              respect and admire.
            </small>
          </p>
          <img
            src="https://codeshare.io/-/img/logos.png?v=v3.32.2"
            alt="used_engineers"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20">
        <div class="flex gap-5">
          <div class="space-y-5">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-100">
              Code with your team
            </h3>
            <p className="text-gray-200 text-lg">
              Open a Codeshare editor, write or copy code, then share it with
              friends and colleagues. Pair program and troubleshoot together.
            </p>
            <p>
              <a
                class="px-5 py-2 border border-white hover:bg-white hover:text-blue-500 rounded-lg text-white"
                href="/new"
                rel="nofollow"
              >
                Hack together
              </a>
            </p>
          </div>
          <div class="space-y-5">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-100">
              Interview developers
            </h3>
            <p className="text-gray-200 text-lg">
              Set coding tasks and observe in real-time when interviewing
              remotely or in person. Nobody likes writing code on a whiteboard.
            </p>
            <p>
              <a
                class="px-5 py-2 border border-white hover:bg-white hover:text-blue-500 rounded-lg text-white"
                href="/new"
                rel="nofollow"
              >
                Start an interview
              </a>
            </p>
          </div>
          <div class="space-y-5">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-100">
              Teach people to program
            </h3>
            <p className="text-gray-200 text-lg">
              Share your code with students and peers then educate them.
              Universities and colleges around the world use Codeshare every
              day.
            </p>
            <p>
              <a
                class="px-5 py-2 border border-white hover:bg-white hover:text-blue-500 rounded-lg text-white"
                href="/new"
                rel="nofollow"
              >
                Teach code
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer class="text-center w-full bg-[#30353e] py-20 text-gray-400 space-y-5">
        <p className="">
          Created by <span className="underline">Chinmaya kumar behera</span>
        </p>
        <p>
          <a
            rel="noopener"
            target="_blank"
            href="/privacy"
            className="underline"
          >
            Privacy Policy
          </a>
          &nbsp;•&nbsp;
          <a className="underline" rel="noopener" target="_blank" href="/tos">
            Terms of Service
          </a>
        </p>
      </footer>
    </main>
  );
}

export default Home
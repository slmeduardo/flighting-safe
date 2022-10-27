import type { NextPage } from "next"
import { useState } from "react"
import { clsx } from "clsx"
import Image from "next/image"
import Dorbell from "../media/icons/Doorbell.png"
import Profile from "../media/icons/Profile.png"
import Airplane from "../media/icons/Airplane.png"

const Home: NextPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [oneWay, setOneWay] = useState(false)
  const [roundTrip, setRoundTrip] = useState(false)
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div>
      {/* HAMBURGER MENU */}
      <div
        className={clsx(
          "fixed block bg-white w-2/4 h-screen py-2 text-primary z-10 transition-all duration-300 ease-in-out",
          isNavOpen ? "left-0" : "-left-full"
        )}
      >
        <p className="border-l-4 bg-gray-200 bg-opacity-25 border-secondary py-4 px-10 text-sm">
          Comprar uma passagem
        </p>
        <p className="py-5 px-10 text-sm">Check-In</p>
        <p className="py-5 px-10 text-sm">Reservas</p>
        <p className="py-5 px-10 text-sm">Informações</p>
        <p className="py-5 px-10 text-sm">Voos</p>
        <p className="py-5 px-10 text-sm">Fale conosco</p>
      </div>
      <div
        className={clsx(
          "w-full h-full bg-black fixed transition-all duration-300 ease-in-out",
          isNavOpen ? "block bg-opacity-60" : "hidden bg-opacity-0"
        )}
        onClick={() => setIsNavOpen(false)}
      ></div>
      {/* END HAMBURGER MENU */}

      {/* ONEWAY FLIGHT CARD */}
      <div
        className={clsx(
          "fixed block bg-white w-full h-screen py-2 text-primary z-10 transition-all duration-300 ease-in-out",
          oneWay ? "left-0" : "-left-full"
        )}
      >
        <div>
          <div className="mx-5 my-10">
            <div className="mb-3">
              <div className="flex gap-3 items-center mb-5">
                <button className="" onClick={() => setOneWay(false)}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M56 5.64L50.36 0L28 22.36L5.64 0L0 5.64L22.36 28L0 50.36L5.64 56L28 33.64L50.36 56L56 50.36L33.64 28L56 5.64Z"
                      fill="#051039"
                    />
                  </svg>
                </button>
                <label className="form-label inline-block mb-2 text-primary text-2xl">
                  Escolha sua origem
                </label>
              </div>
              <input
                type="text"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-tertiary focus:outline-none
      "
                id="exampleFormControlInput1"
                placeholder="Example label"
              />
            </div>
            <div>
              <button className="bg-primary text-white w-full py-3">
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* END ONEWAY FLIGHT CARD */}

      {/* ROUND TRIP FLIGHT CARD */}
      <div
        className={clsx(
          "fixed block bg-white w-2/4 h-screen py-2 text-primary z-10 transition-all duration-300 ease-in-out",
          roundTrip ? "left-0" : "-left-full"
        )}
      >
        aqui eu mamei um q c n ta ligado
      </div>
      <div
        className={clsx(
          "w-full h-full bg-black fixed transition-all duration-300 ease-in-out",
          roundTrip ? "block bg-opacity-60" : "hidden bg-opacity-0"
        )}
        onClick={() => setRoundTrip(false)}
      ></div>
      {/* END ROUND TRIP FLIGHT CARD */}

      <header className="grid grid-cols-7 px-5 py-2 shadow-md">
        <div className="flex items-center">
          <div className="space-y-1" onClick={() => setIsNavOpen(true)}>
            <div className="w-6 h-0.5 bg-primary"></div>
            <div className="w-6 h-0.5 bg-primary"></div>
            <div className="w-6 h-0.5 bg-primary"></div>
          </div>
        </div>
        <div className="col-span-5">
          <svg
            width="194"
            height="38"
            viewBox="0 0 972 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect x="782" width="190" height="190" fill="url(#pattern0)" />
            <path
              d="M11.136 128V38.4H33.024V128H11.136ZM21.376 93.696V75.392H67.968V93.696H21.376ZM21.376 57.728V38.4H73.088V57.728H21.376ZM90.261 128V38.4H112.149V108.672H152.085V128H90.261ZM166.722 128V109.568H181.826V56.832H166.722V38.4H218.818V56.832H203.714V109.568H218.818V128H166.722ZM279.111 129.28C271.943 129.28 265.458 128.128 259.655 125.824C253.938 123.52 248.988 120.277 244.807 116.096C240.626 111.915 237.426 107.008 235.207 101.376C232.988 95.744 231.879 89.6 231.879 82.944C231.879 76.288 233.074 70.144 235.463 64.512C237.852 58.88 241.18 53.9733 245.447 49.792C249.799 45.6107 254.919 42.368 260.807 40.064C266.78 37.76 273.308 36.608 280.391 36.608C285.255 36.608 289.863 37.248 294.215 38.528C298.652 39.808 302.663 41.5573 306.247 43.776C309.916 45.9947 312.946 48.512 315.335 51.328L301.895 65.408C298.823 62.5067 295.495 60.2453 291.911 58.624C288.412 56.9173 284.444 56.064 280.007 56.064C276.338 56.064 272.924 56.7467 269.767 58.112C266.695 59.392 263.964 61.2693 261.575 63.744C259.271 66.1333 257.479 68.992 256.199 72.32C254.919 75.5627 254.279 79.104 254.279 82.944C254.279 86.784 254.962 90.3253 256.327 93.568C257.692 96.8107 259.57 99.6693 261.959 102.144C264.434 104.533 267.292 106.411 270.535 107.776C273.778 109.141 277.276 109.824 281.031 109.824C283.676 109.824 286.108 109.44 288.327 108.672C290.631 107.819 292.636 106.709 294.343 105.344C296.135 103.893 297.5 102.229 298.439 100.352C299.463 98.3893 299.975 96.2987 299.975 94.08V90.752L302.791 95.104H278.343V77.824H320.455C320.626 78.7627 320.754 80.0427 320.839 81.664C320.924 83.2853 320.967 84.864 320.967 86.4C321.052 87.8507 321.095 89.0027 321.095 89.856C321.095 95.6587 320.028 100.992 317.895 105.856C315.847 110.635 312.903 114.773 309.063 118.272C305.308 121.771 300.871 124.501 295.751 126.464C290.631 128.341 285.084 129.28 279.111 129.28ZM353.717 128V57.728H327.349V38.4H402.869V57.728H375.605V128H353.717ZM473.816 128V38.4H495.704V128H473.816ZM418.136 128V38.4H440.024V128H418.136ZM426.84 93.184V73.472H485.336V93.184H426.84ZM516.347 128V109.568H531.451V56.832H516.347V38.4H568.443V56.832H553.339V109.568H568.443V128H516.347ZM589.011 128V38.4H608.595L655.699 102.272L651.475 101.76C650.878 96.9813 650.366 92.544 649.939 88.448C649.512 84.2667 649.214 79.9147 649.043 75.392C648.958 70.8693 648.915 65.664 648.915 59.776V38.4H670.163V128H650.323L601.427 62.208L607.699 63.104C608.296 68.3093 608.766 72.6187 609.107 76.032C609.448 79.4453 609.704 82.3893 609.875 84.864C610.046 87.2533 610.174 89.5147 610.259 91.648C610.344 93.696 610.387 96 610.387 98.56V128H589.011ZM733.986 129.28C726.818 129.28 720.333 128.128 714.53 125.824C708.813 123.52 703.863 120.277 699.682 116.096C695.501 111.915 692.301 107.008 690.082 101.376C687.863 95.744 686.754 89.6 686.754 82.944C686.754 76.288 687.949 70.144 690.338 64.512C692.727 58.88 696.055 53.9733 700.322 49.792C704.674 45.6107 709.794 42.368 715.682 40.064C721.655 37.76 728.183 36.608 735.266 36.608C740.13 36.608 744.738 37.248 749.09 38.528C753.527 39.808 757.538 41.5573 761.122 43.776C764.791 45.9947 767.821 48.512 770.21 51.328L756.77 65.408C753.698 62.5067 750.37 60.2453 746.786 58.624C743.287 56.9173 739.319 56.064 734.882 56.064C731.213 56.064 727.799 56.7467 724.642 58.112C721.57 59.392 718.839 61.2693 716.45 63.744C714.146 66.1333 712.354 68.992 711.074 72.32C709.794 75.5627 709.154 79.104 709.154 82.944C709.154 86.784 709.837 90.3253 711.202 93.568C712.567 96.8107 714.445 99.6693 716.834 102.144C719.309 104.533 722.167 106.411 725.41 107.776C728.653 109.141 732.151 109.824 735.906 109.824C738.551 109.824 740.983 109.44 743.202 108.672C745.506 107.819 747.511 106.709 749.218 105.344C751.01 103.893 752.375 102.229 753.314 100.352C754.338 98.3893 754.85 96.2987 754.85 94.08V90.752L757.666 95.104H733.218V77.824H775.33C775.501 78.7627 775.629 80.0427 775.714 81.664C775.799 83.2853 775.842 84.864 775.842 86.4C775.927 87.8507 775.97 89.0027 775.97 89.856C775.97 95.6587 774.903 100.992 772.77 105.856C770.722 110.635 767.778 114.773 763.938 118.272C760.183 121.771 755.746 124.501 750.626 126.464C745.506 128.341 739.959 129.28 733.986 129.28Z"
              fill="#051039"
            />
            <path
              d="M659.88 178.48C657.096 178.48 654.648 177.952 652.536 176.896C650.456 175.808 648.696 174.224 647.256 172.144L649.944 169.168C651.384 171.28 652.904 172.784 654.504 173.68C656.136 174.576 658.056 175.024 660.264 175.024C661.672 175.024 662.936 174.784 664.056 174.304C665.208 173.824 666.12 173.168 666.792 172.336C667.464 171.504 667.8 170.56 667.8 169.504C667.8 168.8 667.672 168.16 667.416 167.584C667.192 167.008 666.824 166.496 666.312 166.048C665.832 165.6 665.224 165.184 664.488 164.8C663.752 164.416 662.904 164.08 661.944 163.792C661.016 163.472 659.96 163.168 658.776 162.88C657.112 162.528 655.656 162.064 654.408 161.488C653.192 160.912 652.152 160.224 651.288 159.424C650.424 158.624 649.784 157.712 649.368 156.688C648.952 155.632 648.744 154.448 648.744 153.136C648.744 151.344 649.24 149.76 650.232 148.384C651.256 147.008 652.616 145.92 654.312 145.12C656.04 144.32 657.976 143.92 660.12 143.92C662.712 143.92 664.92 144.4 666.744 145.36C668.6 146.32 670.088 147.68 671.208 149.44L668.52 152.08C667.496 150.576 666.28 149.424 664.872 148.624C663.496 147.792 661.88 147.376 660.024 147.376C658.584 147.376 657.304 147.616 656.184 148.096C655.064 148.576 654.184 149.248 653.544 150.112C652.904 150.944 652.584 151.92 652.584 153.04C652.584 153.84 652.728 154.576 653.016 155.248C653.336 155.888 653.8 156.448 654.408 156.928C655.016 157.408 655.8 157.84 656.76 158.224C657.72 158.608 658.856 158.944 660.168 159.232C661.96 159.648 663.56 160.144 664.968 160.72C666.408 161.296 667.624 161.968 668.616 162.736C669.608 163.504 670.36 164.368 670.872 165.328C671.384 166.288 671.64 167.376 671.64 168.592C671.64 170.576 671.144 172.32 670.152 173.824C669.192 175.296 667.832 176.448 666.072 177.28C664.312 178.08 662.248 178.48 659.88 178.48ZM675.167 178L688.127 144.4H692.207L705.119 178H701.039L692.831 156.4C692.735 156.176 692.559 155.68 692.303 154.912C692.047 154.112 691.743 153.216 691.391 152.224C691.039 151.232 690.703 150.288 690.383 149.392C690.063 148.464 689.807 147.76 689.615 147.28H690.527C690.335 147.824 690.095 148.528 689.807 149.392C689.519 150.256 689.199 151.152 688.847 152.08C688.527 153.008 688.223 153.872 687.935 154.672C687.647 155.472 687.423 156.112 687.263 156.592L679.103 178H675.167ZM680.639 168.736L682.031 165.04H697.919L699.503 168.736H680.639ZM711.115 178V144.4H714.907V178H711.115ZM712.843 163.024V159.328H729.547V163.024H712.843ZM712.891 148.048V144.4H731.899V148.048H712.891ZM739.568 178V144.4H759.92V148.048H743.36V174.352H759.824V178H739.568ZM741.344 162.544V158.896H757.232V162.544H741.344Z"
              fill="#FF0000"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_1_10" transform="scale(0.0104167)" />
              </pattern>
              <image
                id="image0_1_10"
                width="96"
                height="96"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAEQklEQVR4nO2cX4gVZRjGf7PlWtBGlBtGRLBG0EUJdpVERBaF1KV1E1sQbVR2U2AEXUgQSVHQVRgFhQQhSVF0EWVEumllLaUGQUsE/bMLpVZo1XWfLr5ZPG56zpk5851vzuzzgxcWdnbeZ95n5vs7s2CMMcYYY4wxxhhjlgpZqsSC84F1wPIMdqTSsaQQrBCMC7YL/hFIMC/YlFpboxE8IvhScDIv+pniOSV8IhuNYGObwrfGG4JzU+ttHIJzBN93acK7gvNSa24cgnVdGiDBTsFIas2NQ/BBARO+ElySWnOjEKwSzBYw4aDg8tS6G4XgpQIGSPCz4KrUuhuD4CLBXwVN+EOwOrX2xiB4uKABEhwRrE2tvRHkw9LvSphwVHBHav2NQHBLCQMkOCa4O7X+RiB4r6QJc4KJ1PoHnhLD0taYF2xOfQ0Dj+CFkgYsxMvyIl55BCP5MLMXE96UF/HKI5jo0QDl/YkX8cogGBLsq8CET+VFvHIIbq7AACks4q1IfT0DiWBHRSbsF1wWUecFgvWCF3PDDytMEvcKHhMsj5U7KoIxlR+WLo5pwaqKdC0T3CjYLNglON4h95QGdRVXsKUiAyT4XXBtCQ2ZYLXgccGHgpkSuacG8klQNcPS1jgsuKGLvGOCBwVvq/hq7dliYz9qVjmCByo0QArt8+2LcowK7hG8mjdXVeZbiD2drrWWM0jBEPA1sKbC0x4HngZWEl4Iu4741z+TwYXtDqilAQAKa/+7qbHGLuhowFC/lBQlgy+Ad1Lr6JGDnQ6orQE5m4DZ1CJ64K0oZ1WHx6riXM9G6iBjR1fD0K6eAMGw4DaFpd9p4FfBnT1Xt3PeEeBA+HGgmALWZ3Cs5zMJXtGpN5lbY07wRO9aT8s1LLhJ8IxgUnCiBndytzEn2CN4tJs7v0hRHuqQ+HXBcA/nH1NYjt4u+LsGhSwS04Ktgg2Ciysr+qICDSksOLUTslswWqDg47nw32pQxCLxZ36jTAiujFLwsxRtrcIebDtxPwmuOcPfjuZ3yFbFm3HGihnBx4InBdcrwpyk6xMKtgH3djjsCDAOzBNmm/2acVbFLDAJ7MzjmwxOxkxYxICVwI/0cQjaB+YJI5ZP8pjM4N+0ktogeKoGzUKvEb/jLEChpkFhtLMfuDqOnCgcAj4n3OEfZfBLYj2nUbhtFtwFvB9BS1UcBfZyqln5NmPgJnLtUdglSt2ULMQJhTcqtghuFSxLXZ8ilBqdKHwwcYA0W26tHeck8FkGMwl0pEXw/FLtOGuBwt5trJnsIaWYcQ4agvsqKnj0GWcjUXh9Y9dS6zhrhWCN2v8PCOW/36ewn7BBfn+zWgSvdeg4/cF1TASXCn4QbBPcL7gitSZjjDHGGGOMMcYY8z/KbMorhpCmkBWsad0/0Gg8NiAxNiAxNiAxNiAxNiAxNsAYY4wxxhhjjDHGGGOMMSYy/wHtjpjK4ZXoJAAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
        </div>
        <div className="flex justify-end items-center gap-8">
          <div>
            <Image
              width="20px"
              height="20px"
              src={Dorbell}
              alt="DoorbellIcon"
            />
          </div>
          <div>
            <Image width="16px" height="16px" src={Profile} alt="ProfileIcon" />
          </div>
        </div>
      </header>
      <div>
        <div className="grid grid-cols-2">
          <button className="flex py-4 items-center justify-center gap-2 border-b-2 border-tertiary">
            <Image
              width="16px"
              height="16px"
              src={Airplane}
              alt="AirplaneIcon"
            />
            <p>Reservar um voo</p>
          </button>
          <button className="flex py-4 items-center justify-center gap-2">
            <Image
              width="16px"
              height="16px"
              src={Airplane}
              alt="AirplaneIcon"
            />
            <p>Segurar meu saco</p>
          </button>
        </div>
        <div className="mx-5 my-7">
          <div className="my-10">
            <label className="text-gray-500 text-sm">Viagem</label>
            <select className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200">
              <option value="ida_volta">Ida e volta</option>
              <option value="ida">Somente ida</option>
            </select>
          </div>
          <div className="my-10 flex items-center gap-3">
            <label className="text-gray-500 text-sm sr-only">Origem</label>
            <svg
              width="32"
              height="24"
              viewBox="0 0 65 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 36L0 20L5.10611 19.149C5.67423 19.0543 6.25561 19.2091 6.70138 19.5739L9.55685 21.9101C10.7795 22.9105 12.4031 23.2742 13.9357 22.8911L23.5 20.5L13.5 2L16.6597 1.0521C17.7814 0.715584 18.9964 1.06257 19.7712 1.94072L32.2776 16.1147C33.0272 16.9641 34.1913 17.3189 35.2872 17.0319L52.3338 12.5673C53.7117 12.2065 55.1781 12.452 56.3632 13.2421C59.8429 15.5619 59.093 20.877 55.1073 22.1435L11.5 36Z"
                fill="#051039"
              />
              <rect x="5" y="47" width="37" height="1" fill="#051039" />
            </svg>
            <button
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 text-left"
              onClick={() => setOneWay(true)}
            >
              Origem
            </button>
          </div>
          <div className="my-10 flex items-center gap-6">
            <label className="text-gray-500 text-sm sr-only">Destino</label>
            <svg
              width="20"
              height="31"
              viewBox="0 0 41 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="61" width="37" height="1" fill="#051039" />
              <path
                d="M23 0C13.0486 0 5 7.9815 5 17.85C5 31.2375 23 51 23 51C23 51 41 31.2375 41 17.85C41 7.9815 32.9514 0 23 0ZM23 24.225C19.4514 24.225 16.5714 21.369 16.5714 17.85C16.5714 14.331 19.4514 11.475 23 11.475C26.5486 11.475 29.4286 14.331 29.4286 17.85C29.4286 21.369 26.5486 24.225 23 24.225Z"
                fill="#051039"
              />
            </svg>
            <button
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 text-left"
              onClick={() => setRoundTrip(true)}
            >
              Destino
            </button>
          </div>
          <div className="my-10 flex items-center gap-4">
            <label className="text-gray-500 text-sm sr-only">Data</label>
            <svg
              width="28"
              height="28"
              viewBox="0 0 96 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 88.5V14.5C0 11.1863 2.68629 8.5 6 8.5H90C93.3137 8.5 96 11.1863 96 14.5V88.5C96 91.8137 93.3137 94.5 90 94.5H6C2.68629 94.5 0 91.8137 0 88.5Z"
                fill="#051039"
              />
              <path
                d="M29 8H19C17.3431 8 16 9.34315 16 11V20.5996C16 21.2377 16.2154 21.8571 16.6114 22.3575L16.755 22.5389C20.5337 27.3137 27.8123 27.2071 31.4496 22.3238C31.807 21.844 32 21.2618 32 20.6636V11C32 9.34315 30.6569 8 29 8Z"
                fill="white"
              />
              <path
                d="M77 8H67C65.3431 8 64 9.34315 64 11V20.5996C64 21.2377 64.2154 21.8571 64.6114 22.3575L64.755 22.5389C68.5337 27.3137 75.8123 27.2071 79.4496 22.3238C79.807 21.844 80 21.2618 80 20.6636V11C80 9.34315 78.6569 8 77 8Z"
                fill="white"
              />
              <rect x="6" y="32" width="84" height="56" fill="white" />
              <path
                d="M24.5 0.5H24C21.7909 0.5 20 2.29086 20 4.5V17.5C20 19.7091 21.7909 21.5 24 21.5H24.5C26.7091 21.5 28.5 19.7091 28.5 17.5V4.5C28.5 2.29086 26.7091 0.5 24.5 0.5Z"
                fill="#051039"
              />
              <path
                d="M72.5 0H72C69.7909 0 68 1.79086 68 4V17C68 19.2091 69.7909 21 72 21H72.5C74.7091 21 76.5 19.2091 76.5 17V4C76.5 1.79086 74.7091 0 72.5 0Z"
                fill="#051039"
              />
              <rect
                x="51"
                y="40"
                width="12"
                height="11"
                rx="1"
                fill="#D9D9D9"
              />
              <rect
                x="51"
                y="40"
                width="12"
                height="11"
                rx="1"
                fill="#051039"
              />
              <rect
                x="69"
                y="40"
                width="12"
                height="11"
                rx="1"
                fill="#051039"
              />
              <rect
                x="69"
                y="56"
                width="12"
                height="11"
                rx="1"
                fill="#051039"
              />
              <rect
                x="51"
                y="56"
                width="12"
                height="11"
                rx="1"
                fill="#051039"
              />
              <rect
                x="33"
                y="56"
                width="12"
                height="11"
                rx="1"
                fill="#051039"
              />
              <rect
                x="15"
                y="56"
                width="12"
                height="11"
                rx="1"
                fill="#051039"
              />
              <rect
                x="15"
                y="72"
                width="12"
                height="11"
                rx="1"
                fill="#051039"
              />
              <rect
                x="33"
                y="72"
                width="12"
                height="11"
                rx="1"
                fill="#051039"
              />
              <rect
                x="51"
                y="72"
                width="12"
                height="11"
                rx="1"
                fill="#051039"
              />
              <rect
                x="69"
                y="72"
                width="12"
                height="11"
                rx="1"
                fill="#051039"
              />
            </svg>

            <div className="flex items-center justify-center">
              <div className="relative">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                  placeholder="Select date"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

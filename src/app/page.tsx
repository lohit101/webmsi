"use client"

import { a, p } from "framer-motion/client";
import logo from "@/app/images/logo.png";
import company1 from "@/app/images/company1.png";
import company2 from "@/app/images/company2.png";
import company3 from "@/app/images/company3.png";
import company4 from "@/app/images/company4.png";
import company5 from "@/app/images/company5.png";
import company6 from "@/app/images/company6.png";
// import ReactPlayer from "react-player";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import { Dock, DockIcon } from "@/components/magicui/dock";
import TextReveal from "@/components/magicui/text-reveal";
import WordRotate from "@/components/magicui/word-rotate";
import BlurFade from "@/components/magicui/blur-fade";
import Ripple from "@/components/magicui/ripple";
import { MagicCard } from "@/components/magicui/magic-card";

export type IconProps = React.HTMLAttributes<SVGElement>;

const images = Array.from({ length: 6 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function Home() {
  async function animateNavbar(animate: boolean) {
    if (animate) {
      document.getElementById("words")?.classList.replace("w-3/4", "w-0");
      document.getElementById("navbar")?.classList.replace("py-4", "py-2");
      document.getElementById("navBg")?.classList.replace("bg-transparent", "bg-black/20");
    } else {
      document.getElementById("words")?.classList.replace("w-0", "w-3/4");
      document.getElementById("navbar")?.classList.replace("py-2", "py-4");
      document.getElementById("navBg")?.classList.replace("bg-black/20", "bg-transparent");
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        animateNavbar(true);
      } else {
        animateNavbar(false);
      }
    });
  }


  const Icons = {
    logo: (props: IconProps) => (
      <img src={logo.src} alt="Logo" className="min-w-5 invert drop-shadow-md" />
    ),
    email: (props: IconProps) => (
      <a href="mailto:info@webmsi.com" className="min-w-5">
        <img className="min-w-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADLklEQVR4nO2bPWsVQRSGHw1+IREUCxULBW1sbLRQLLTRSitLO0sLUQv/QiJoZUrBIjZiERQLA2IqmwhicxuL2wgRBL8ISlAzcmUEuRB3Z3dm58zmfeBA4H7tfZ+b3TNnd0EIIYQQQgghhBBCCCGEEEIIIYQQTTkAvAWcijYZDIHDRGIP8EZCaCpjAOwnMjuBl5JCqIxXwG4SsR2YlxTqylgAdrQJ/FSN52wF5iSFKhlzPqtWmT8EZoCNFW8yAdyTFNaS8QDYVJHhBuCOz/y/QkLe8LakMC4j9AddS8iongDbqOampPA3s6kaeW0BHv2TWW0hIQelK8CvdSxmFbjRsCkKEhLStl0CfhgIx3VcP4HLLZYNwUJCFjbnge8GQnId1QpwseXCupGQkKX/aeCrgbBc4loGztbI42DF6KmxkFG9B47W2IjjwAcDoblE9RE4WSOHI8C7ivdqJWRUnyJuTIm1FPlH2VpIyL9r3ybFwwS77ShCYh3QSqpBzcbmQmBjE01IjJavlFpM2PpHFdJ2UVRCLSReHEcX0mZsYL0edzA+SibE9WxSPNvRgDWpkL5Mimc6/GElF1L6pHiq411vJ0JKnBSvZmpOOhOSul10EStn+96pkBImxSuZF7idC7E8KV42MALKIiRkKHeso0lxzIltkUIsTYqXDJ1GyCrEwm5iCBwytPvMLiTngXRgsMEwISRHq7lotAU3IyR0Mfasxee8MLxINSUkZFyxueG4oouJbe+EpBrozRYw6DQrxEUO8G4hpwJMC3EBl/FfXaMT+uYfK+W2CvNCHPAcmKwR6j7gOnDf1zVgb43XTfrPyP09ixHiAtrUUKxdcFGMEJfgZkmLlyQVJcRFvJ3Y6kV7xQlxfsB3roWMM36gmPt79EaI8yvoaX8MqMsu4JaRU8S9E+J8ffFiTvh1xDgT/rFp/9zc29t7IW7s/Mpr4Kmv0d+fDWzXuhXielASQn4JEkL+4CWE/GFLCPkDlhDyhyoh5A9SQsgfnoSQPzAJIX9IEmIgGCch+cNwBkqjE/JLkBDyBy8h5A9bQuiZECGEEEIIIYQQQgghhBBCCCGEEELwh9+EWqmXUvK87AAAAABJRU5ErkJggg==" />
      </a>
    ),
    chat: (props: IconProps) => (
      <label className="min-w-5 cursor-pointer" htmlFor="modal-1">
        <img className="min-w-5" src="data:image/png;base64,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" />
      </label>
    ),
  };

  return (
    <>
      <nav id="navbar" className="z-[70] w-[100vw] flex navbar-sticky flex-row items-center justify-between py-4 px-5 sm:px-10 transition-all duration-1000">
        <div id="navBg" className="fixed top-0 left-0 z-[60] flex h-28 w-[100vw] bg-transparent backdrop-blur-sm [mask-image:linear-gradient(to_bottom,white,transparent)] transition-all duration-1000"></div>
        <div className="flex z-[70] w-full flex-row items-center justify-between">
          <a href="/">
            <div className="flex flex-row items-center gap-2 opacity-100">
              <img src={logo.src} alt="Logo" className="h-8 invert drop-shadow-md" />

              <div id="words" className="hidden sm:flex flex-col w-3/4 overflow-hidden transition-all duration-1000">
                <h1 className="text-xl whitespace-nowrap drop-shadow-md">Millenium</h1>
                <p className="text-sm whitespace-nowrap drop-shadow-md">Software & Staffing</p>
              </div>
            </div>
          </a>

          <a href="#" className="flex flex-row gap-2 bg-black py-2 px-4 hover:px-6 my-2 text-center text-sm transition-all duration-500 text-white w-max group">Start a Project <p className="rotate-45 group-hover:rotate-90 transition-all duration-500">&uarr;</p></a>
        </div>
      </nav>

      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal max-w-[100vw] overflow-hidden z-[70]">
        <label className="modal-overlay max-w-[100vw]" htmlFor="modal-1"></label>
        <div className="modal-content flex flex-col gap-5 bg-white">
          <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</label>
          <div className="flex flex-row items-center justify-start gap-2 mt-10">
            <p className="text-2xl font-bold whitespace-nowrap w-max">Hi, my name is</p>
            <input className="text-2xl font-bold border-transparent outline-none focus:border-transparent focus:ring-0 w-1/2 bg-white" type="text" placeholder="Your Name" />
          </div>
          <textarea className="border-transparent outline-none focus:border-transparent focus:ring-0 text-2xl font-bold bg-white" placeholder="I am writing to..." cols={50} rows={20} name="message" id="message"></textarea>
          <div className="flex gap-3">
            <button className="btn btn-block bg-gray-200 hover:bg-gray-300 text-black">Cancel</button>
            <button className="btn bg-black hover:bg-black/80 btn-block text-white">Send<img className="h-4 invert mx-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFDUlEQVR4nO2dW6gWVRTHf+f4aRe6aKRZZA/STYxMjS50e4mgQLArZHSwkOxB6dGihySLgqDSl7DeggqigjK6QHQzkqK3zhHSRC0rTCgvmUfxnB0b1qHhcL7vm9kz+zIz6wfrbWbf/t/MXrP22vsDRVEURVEURVEURVGUpnIpsA74FvgHGAFWxm5U21gIrAd+AEwXU1E8MgjcCDwP7OghQtaGfTaojZwC3AG8CuzPKULWjsTuQBM4A7gXeAs45CBC1rbF7kxdOQcYAt6WSdlUZHaiV3IyD3gE2AKcqFCErF2WtzFtZT7wGPANMO5JhAn7MXZn6+yeGg/2dOyO19k9NR5sMS13T28FNgK/RxRhwnYDA7SM04FlwOvAwQREyNqLtIRzgYfFMzoWeJBPyJd3nmtvpsHMC+Ce9rM/gSeB4zmutV/002gY8wO6p/3MemfXAr/lvN6GWRrBwkjuaS+z89NZwNYC99xOA9zTnQkMftaOyxOK/OLz3ndYPL5auqd/JDDwZgqzr6brpb2PFrz3DWrmnpaNnhrPZues86Xd1wGjBe+/h5ZFT41H2wzMkPbPBfYVvN+64WeSECm4p8bB7FOwKtOP6cDXDuW8TwKk5J4aB9snr6YsrziWtTK2ezqSwICaErZVXk1ZhhzLOilRhGBcBLwM/JLAQJoKbJO8mrJc4zCJT9jnIcVYIv61aYAdk6dgMucBv5Yod21IQb5IYCBNBbYXWDpF/+yT8lWJcsfFoQnG0QQG05Q0+0qZ3aV/m0qW/R2B+TmBATUl1yY6XfrmOoln7fHAerA6gUE1Dmaf7Ad69GtpRWsqUTJL1tTsY283cFWP/syWOaVsPdb1j8YNiaxXmz72JTCnRz86MqdUUdcGInOBpNybhONRnT59eKnC+uwnQXRmSPjc1OD7YjIrKqxzT2qZJQ8C/yb8fTGZRRW78PZJS44l8kuJJcYnEurvh71mV8V1J5tZYoNqnwUWYlyWfvNkd9hrPq64/gOpZ5Z0ZIBCiHGk4MrcCx7aUJvMkvs9h1p2AlcUaM9dntZpapVZssjD+9oAHwGzCrTjSk/LxzbyfSo1w06in1Y8XwwWqH+Wxxjcm9SUabKyOFby13h3wXoH5WkynszuP6w1yxyz03fIcnFRnvMoxmhqmSWu2Ijo9gId/xCY6VDPcs/JFh/QIOwv6z0P88UElwdIxHuIhjEgW4XHuswXdzqWOzNAfnDwzJKQ2NMR/sp09idggWNZg/KKM54taGZJDC6WrcNbgLNLlLMhgBjBM0ticVrJEPbyQBmTwTNL6uq5HQz0dATPLKmjxzYSSIwomSV1YgB4J6AYRlxqpQvrA4sRNbOkDmGYscCCPBO70ykfNPl3YDFMzvX6Vp7yNhxBjOQyS1JgQPYqmgiWZGZJCh+Pw5EEuSV251Plkgjzx4EcWZCt5jaJuIYS5LXYHa4DTwUUxEaklRwT/LsBxKhlZknMONZ2z4LYQ5SVgpFen8u19xVpjOJ3LWRUzshSHPCRT2xXMBVHfCTF2UM2lRJUuffjZI/97EoBqtod1fjMkpCsqECQVmSWhGRjCTHG5dQjpUI6JQ7L+b7Khij/M8fxqKUnMmUoFbPYYcu2ZpZ4ZqiAGDY2pgRgc05BnlU1wjA957ntV6sg4Zjb558NrAOgmSWBuanHeV/2tFUlAmunEMNmz1+oasRjtWx9Oyrns/Q6dU5RFEVRFEVRFEVRFNrKf4Xnha/7e0RUAAAAAElFTkSuQmCC" /></button>
          </div>
        </div>
      </div>

      <div className="fixed z-50 bottom-0 w-[100vw] mb-10 pointer-events-none">
        <Dock magnification={60} distance={100} className="pointer-events-auto">
          <DockIcon className="bg-black/10 dark:bg-white/10 p-3 min-w-10 min-h-10 aspect-square">
            <Icons.logo className="size-full" />
          </DockIcon>
          <DockIcon className="bg-black/10 dark:bg-white/10 p-3 min-w-10 min-h-10 aspect-square">
            <Icons.email className="size-full" />
          </DockIcon>
          <DockIcon className="bg-black/10 dark:bg-white/10 p-3 min-w-10 min-h-10 aspect-square">
            <Icons.chat className="size-full" />
          </DockIcon>
        </Dock>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[100vh] sm:min-h-[80vh] pt-10">
        <DotPattern className={cn(
          "[mask-image:radial-gradient(white,transparent,transparent)] ",
        )}>
        </DotPattern>
        <p className="text-3xl text-center bg-white mx-5 px-2 font-bold z-20">By the <span className="bg-gradient-to-br from-blue-500 to-blue-300 bg-clip-text text-transparent">numbers.</span></p>
        <p className="text-base text-center bg-white mx-5 px-2 z-20">Scroll to see why the world's leading companies trust their staffing and software to us.</p>
        <div className="flex items-end justify-center bg-black/10 w-0.5 h-12 transition-all mt-5">
          <div className="flex bg-black w-0.5 h-6 transition-all animate-bounce"></div>
        </div>
      </div>

      <div className="flex w-[90vw] mx-[5vw] rounded-xl overflow-hidden">
        <iframe className="w-full h-[calc(100vw/2.25)]" src="https://www.youtube.com/embed/OtYEourJArk?si=a1uD6F5B-lIuv6cV?rel=0&amp;autoplay=1&amp;mute=1&amp;controls=0&amp;showinfo=0" title="Showreel" allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      <div className="flex flex-col mx-5 sm:mx-20 mt-10 sm:mt-40">
        <p className="text-3xl">Who we are.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 my-3 gap-5">
          <MagicCard className="flex flex-col bg-gray-100 rounded-sm p-5" gradientColor="#d3d3d3">
            <div className="flex items-center justify-start gap-2">
              <img className="h-5 opacity-70" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIElEQVR4nO2cXYhVVRTH/zNoCWoKSThvk5PiGPo+6jjNqCEW+SD6ItGDDwWF5osIYhohJIqhD+Jn4gfRqwRlKWpKVG9CNTNqUfmFzEyi4weSHW/syz52uux99t5n77P33feuP2y4XNY6//Nb55y79vm4ByCRSCQSiUQikUgkkpUWAzgAYBDAfT4GAOwHsMhu0SSmGQC+BVBRjHMAplczSMZaAOC2RpHTwWK7zW2aWzMMi5yOvwC8FHrlY9KZAkVOB/upIWk2vorlWIiI1QLgdQBHAfwB4BEfv/PvXuMxtjrgoND7IuL9n2YB+EED8HsAnZZegw4KPRAR71P1AbhrAHmH5xTVqINCj0bEW1UnX5ApKMuZGWGhOwPwVvWdBez5gD8d/RHxYokD4FcjaoZLAvHikANjVjRTLXLg2xcRLy45MGY/A0V0zsKTnexExXvPgTFbRhG9CGDY8yl4MF4X3Z9Nk4qqmxfOpMg2F5WC8Q44MP4FdpoO4Kzmz4XtxaRgvHsdGO+BGy3kM4l+fnje45/3uThZCM3b68C4B/GoNyTvKQvTrxGfToXibQcwVMB0BEAH4lN7SN4uw6nWEM+JVV0hedmWPqlh+hWPjV3toXnnA9gN4CLfkkP8M/tuHhpP85uBtzczpRsVdPVu/l061WPTs1cCrm906pDcnE0ATMzEjQfwjyDuNIBpAdc/Cs3lHVz39tTPkthhviyS5EJS3tTqmCDnSE48PeMh0WlFh18nyFmryGHXSUiGp789klmBKs/VtRDv3Z/NHUV7o03336soFmuEzwnyJkgaYnbsr0Nere6/VRD7sWX371cU65JF7mAd8mp1/+WC+BWW3f+Oolif5eQeV+Ter0Pep1tWZlrhs4NaTcuJH9bY0omiWBcAtAryWjSfn26tM15l978ted6sRbGyZy0LzcYGQd56jTxVoUPwKrs/WymZvrHo/olGsR7zWUYqdoj+bVnoULzK7v9pTu5Bi+6faBbsGoApAJ4H8KdmTl6hQ/EqO/gDALMFeS/zplO0+ycGRbvBR8VBoUPxat1yv1wzpx3P7/5WLLp/Yli4iqNCh+LVBv5c83qDLnASqNCheI2AtwPY5hm4EqjQrnmjAK40gG/TASdUaFChG2nPSmiPBhW6kfashPZoUKHL2LNuauZf4Zc1O/hnnZxbEs+m3KN3auZ/lMn5UDNnBxX6P40DsEvjrxRrMjnvKmLZ9eJP+LLrbo8OdQjrwr+ZiVtVFLIeeIscwlscHMK6hWZvG0i11EGhg/HqHsLssE31joNDWLfQ2Sc4uxwUuh54c4FXatwRNgHW9c2+smGmR98yeXON+wzuu7U69J2aiZvq0bdM3lzjOZm42R6Bx2XinvXoWyZvrnFbJq7NE/ADQexDT4UukzfX+JlM3FgATzwAXxfE3vBU6DJ5pcbs8a1a3fUA/JPBg+gufcvmlRr/Koj9zQPweUHsBQ++ZfNKjdnbs2r1owfgE4LYLzz4ls0rNWZwtfrSA/BhQexRD75l89Yd8E5B7K4G2MBSY/Z8g8k1g1ZHvpsEsVs8+JbNKzUWPT670QPwe4LY9z34ls0rNV4tiH3bA/AqQexbHnzL5pUaLxPELvcAvFQQ+4YH37J5pcbZh8FT9XgAnit5a3rZvmXzVl/fW7sQdur5giC2TXJaetXUFM3nW+3yOicNqU4I4jeTr1pjAHzA/8Iwwv9KMDknfhJ/ZeQI37Kb+TJM1Wy+JBKJRCKRSCQSiYSg+hcyBpnj5JpmBQAAAABJRU5ErkJggg==" />
              <p className="text-xl">Fortune 500</p>
            </div>
            <p className="my-2 text-sm">We've done well over half a billion dollars of business with 102 companies out of the Fortune 500, so chances are we have a team member that knows your industry inside out.</p>
          </MagicCard>

          <MagicCard className="flex flex-col bg-gray-100 rounded-sm p-5" gradientColor="#d3d3d3">
            <div className="flex items-center justify-start gap-2">
              <img className="h-5 opacity-70" src="data:image/png;base64,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" />
              <p className="text-xl">Overseas Connections</p>
            </div>
            <p className="my-2 text-sm">With operations in 42 US states, and offices in Canada, the UK, and Asia, we're already next door.</p>
          </MagicCard>

          <MagicCard className="flex flex-col bg-gray-100 rounded-sm p-5" gradientColor="#d3d3d3">
            <div className="flex items-center justify-start gap-2">
              <img className="h-5 opacity-70" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3ElEQVR4nO2bzWoTURTHf9gs1IJoLK7qTvyIseAbaH0BN62CGN9ARcWCC6F2UawutA9g68ci1oWgtn2E1I0fiJsa7VZt68JVq7GRC2cwDDPmzueZJPOH/+7OmfPjZubOPecGcuXKlcteBeAO8ANYB6aAPrpYt4CmyxN0qQ4AGx7Am8BhOkhDwCKwAswBxzzG9ANLHrCOl2SMWybWM4m94BM7VQ0Aa67kG8AscAo4CpwB3v8H1vE7GVsChoEZidU6ZhUoagJfsACJ2xVN4KsKwFc0gccUgK9rAk8rAJt7qmgH8FkBuA5s14B9rADr+FGS0APyNh4TTyvNrNufgPsteVXiWLKGPNbZLPs7UI4CvJgBiKCejwK8kgGAoP4SBXguAwBBbXIOrRLwOwMQtv4DHCeiZjIAYmuzaYmsYaXknwOD4gXLa0yukVVSgK1KOcjRoOV1JtfIOqsMa7Tf8lqTayT1W27ek4QtyM+7aVlE8KqcWOlgm7JMWrDVgHFeA4fsEP/dZEKKa50G63hTGApY6G7Im3wETgMjwLIibKtv2wCvhwx+pCXGPuCDMqzxalLAW8BOV5x20EnDWgNPhQx+0yOWH3QasMaTNsCm1zPu0yVoN8sXLaDTgN0Qhj4CLku1mKHTgK1J7qFkFvG3MUEXU4B94/EuSeXT0g866Wd2FMXNwxZwySemebaexAzbDPqFlcT20Gumk5hZxyeIQbMRkzDQN4BtwC5pfzYT8oM4yrSNmJL5CfxKELYpuZZ7rYhX7bUybT0K8HwGAIL6RRTgsrQvmh3ib3HUtYrSqGptptUzALfsaqadB/bQpe3Sh1o94rrSzKYOq3nk4R49dqjlWq8dW7qsCVxRAD6nCbzXY51uyEf8SVkTR6UjYLN5H2lz9PArsBtllYFXctClGvJwac2nUmE2L08l9su4mmVZOD4cy8a9Uw6Ij9PFKkj7Y02K5JPd/heAXLlyEav+AuDEh4Hc2OFPAAAAAElFTkSuQmCC" />
              <p className="text-xl">Certified WBE and MBE</p>
            </div>
            <p className="my-2 text-sm">We give you two routes to grow diversity spend, as a certified WBE and MBE (plus CMM Level 3).</p>
          </MagicCard>

          <MagicCard className="flex flex-col bg-gray-100 rounded-sm p-5" gradientColor="#d3d3d3">
            <div className="flex items-center justify-start gap-2">
              <img className="h-5 opacity-70" src="data:image/png;base64,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" />
              <p className="text-xl">20+ Years of Ethics</p>
            </div>
            <p className="my-2 text-sm">For over 20 years, we've put ethics before profits.  No one has a better reputation.</p>
          </MagicCard>
        </div>
      </div>

      <div className="flex">
        <TextReveal text="We are a ‘people first’ company, dedicated to putting our clients and their customers at the center of everything we do." className="text-6xl" />
      </div>

      <div className="flex flex-col mx-5 sm:mx-20 mt-10 sm:mt-40">
        <p className="flex flex-row items-center gap-2 text-3xl">Our <WordRotate words={["Partners.", "Family."]} duration={5000}></WordRotate></p>

        <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-center p-5 sm:p-10 gap-5 sm:gap-20">
          <img className="sm:h-8" src={company1.src} alt="Company 1" />
          <img className="sm:h-10" src={company2.src} alt="Company 2" />
          <img className="sm:h-10 invert" src={company3.src} alt="Company 3" />
          <img className="sm:h-12" src={company4.src} alt="Company 4" />
          <div className="flex flex-row items-start sm:items-center justify-between sm:justify-center gap-5 sm:gap-20 col-span-2 sm:col-span-4 w-full">
            <img className="sm:h-8 w-1/2 sm:w-auto" src={company5.src} alt="Company 5" />
            <img className="sm:h-28 w-1/3 sm:w-auto" src={company6.src} alt="Company 6" />
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-5 sm:mx-20 mt-10 sm:mt-40">
        <p className="text-3xl">Our Work.</p>

        <section id="photos">
          <div className="columns-2 sm:columns-3 gap-2 py-10 sm:p-10">
            {images.map((imageUrl, idx) => (
              <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                <div className="group flex flex-col mb-2">
                  <img
                    className="size-full object-contain"
                    src={imageUrl}
                    alt={`Random stock image ${idx + 1}`}
                  />
                  <div className="absolute flex flex-col items-start justify-end h-full w-full sm:opacity-0 sm:group-hover:opacity-100 bg-black/20 transition-all text-white p-2 sm:p-5">
                    <p className="text-base sm:text-md">Project Name</p>
                    <p className="text-[0.8rem] sm:text-sm text-gray-200 max-w-full truncate overflow-hidden">Small project description in one line.</p>
                    <a href="#" className="flex flex-row gap-2 hover:gap-3 transition-all text-[0.75rem] mt-2">
                      <p>View Project</p>
                      <p>&rarr;</p>
                    </a>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>
      </div>

      <div className="flex flex-col mx-5 sm:mx-20 my-20">
        <div className="flex flex-col sm:flex-row">
          <div className="sticky top-28 flex flex-col w-full sm:w-1/2 h-max mb-10 sm:mb-20">
            <p className="text-3xl">Staffing.</p>
            <p className="text-xl">People & Process + Flexible Delivery = <span className="bg-gradient-to-br from-blue-500 to-blue-300 bg-clip-text text-transparent">Value</span></p>
            <a href="#" className="flex flex-row gap-2 hover:gap-3 transition-all text-[0.75rem] mt-2 w-max">
              <p>Learn More</p>
              <p>&rarr;</p>
            </a>
          </div>
          <div className="sticky top-28 flex flex-col w-full sm:w-1/2">
            <div className="sticky top-20 flex flex-col w-full py-5 sm:py-10 bg-white">
              <p className="text-xl">General</p>
              <ul className="list-disc text-sm text-gray-600 mx-5 my-2">
                <li>Administrative</li>
                <li>Human Resources</li>
                <li>Buyers / Purchasing</li>
                <li>Finance / Accounting</li>
                <li>Marketing</li>
                <li>Call Center</li>
                <li>Customer Service</li>
                <li>Industrial Support</li>
                <li>Clerical</li>
              </ul>
            </div>

            <div className="sticky top-20 flex flex-col w-full py-5 sm:py-10 bg-white">
              <p className="text-xl">Information Technology (IT)</p>
              <ul className="list-disc text-sm text-gray-600 mx-5 my-2">
                <li>Application Server</li>
                <li>ERP</li>
                <li>Client Server & OO Development</li>
                <li>Network & Communication</li>
                <li>CRM</li>
                <li>Data Warehousing / BI / ETL</li>
                <li>Database Administration</li>
              </ul>
            </div>

            <div className="sticky top-20 flex flex-col w-full py-5 sm:py-10 bg-white">
              <p className="text-xl">Engineering</p>
              <ul className="list-disc text-sm text-gray-600 mx-5 my-2">
                <li>Engineers</li>
                <li>Designers</li>
                <li>Technician</li>
                <li>Illustrators</li>
                <li>Technical Writers</li>
                <li>Program / Project Manager</li>
                <li>Supervisor</li>
              </ul>
            </div>

            <div className="sticky top-20 flex flex-col w-full py-5 sm:py-10 bg-white">
              <p className="text-xl">Scientific</p>
              <ul className="list-disc text-sm text-gray-600 mx-5 my-2">
                <li>Applied Health Services</li>
                <li>Biotechnology</li>
                <li>Chemical & Consumer</li>
                <li>Food & Beverage</li>
                <li>Life Sciences</li>
                <li>Medical Devices</li>
                <li>Pharmaceutical</li>
                <li>Clinical</li>
                <li>Energy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-5 sm:mx-20 mb-10 my-20">
        <div className="flex flex-col sm:flex-row">
          <div className="sticky top-28 flex flex-col w-full sm:w-1/2 h-max mb-10 sm:mb-20">
            <p className="text-3xl">Software.</p>
            <p className="text-xl">Onshore Management & Offshore Teams</p>
            <a href="#" className="flex flex-row gap-2 hover:gap-3 transition-all text-[0.75rem] mt-2 w-max">
              <p>Learn More</p>
              <p>&rarr;</p>
            </a>
          </div>
          <div className="sticky top-28 flex flex-col w-full sm:w-1/2">
            <div className="sticky top-20 flex flex-col w-full py-5 sm:py-10 bg-white">
              <p className="text-xl">Onshore Management</p>
              <p className="text-sm text-gray-400">Southfield, MI Headquarters</p>
              <p className="text-sm text-gray-600 my-2">We've hand selected our top talent - architects and project managers who have excelled in delivering to Fortune 100 clients - and put them in client facing leadership roles. They're well-versed in business and IT, and will work with you to understand requirements, design solutions and manage the process across our suite of IT consulting to software development services</p>
            </div>

            <div className="sticky top-20 flex flex-col w-full py-5 sm:py-10 bg-white">
              <p className="text-xl">Offshore Teams</p>
              <p className="text-sm text-gray-400">New Delhi, Delhi Office</p>
              <p className="text-sm text-gray-600 my-2">At our state of the art software development center in New Delhi. our highly qualified developers work across a suite of languages and frameworks to build and test a wide range of products, including:</p>
              <ul className="list-disc text-sm text-gray-600 mx-5">
                <li>Software Development</li>
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>Web Design / Hosting</li>
                <li>BPO</li>
              </ul>
            </div>

            <div className="sticky top-20 flex flex-col w-full py-5 sm:py-10 bg-white">
              <p className="text-xl bg-gradient-to-br from-blue-500 to-blue-300 bg-clip-text text-transparent">Value</p>
              <p className="text-sm text-gray-600 my-2">Through our Hybrid Delivery Model, you will get:</p>
              <ul className="list-disc text-sm text-gray-600 mx-5">
                <li>High quality</li>
                <li>Low cost</li>
                <li>Collaborative relationship throughout the product lifecycle</li>
                <li>Transparent communication</li>
                <li>Optimized resource, quality project, and process management</li>
                <li>Faster time to market</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full py-40 my-20 flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-1/2 z-10">
          <p className="text-3xl text-center mx-10">Let's <span className="bg-gradient-to-br from-blue-500 to-blue-300 bg-clip-text text-transparent">work</span> together.</p>
          <a href="#" className="flex flex-row gap-4 bg-black py-2 px-4 hover:px-6 my-2 text-center transition-all duration-500 text-white w-max group">Start a Project <p className="rotate-45 group-hover:rotate-90 transition-all duration-500">&uarr;</p></a>
        </div>
        <Ripple />
      </div>

      <div className="flex flex-col mx-5 sm:mx-20 mb-10 my-20">
        <div className="flex flex-col">
          <p className="text-3xl">Latest News & Updates.</p>
          <a href="#" className="flex items-center my-2">
            <p className="flex flex-row gap-2 hover:gap-3 transition-all text-gray-500 text-sm">Read more <span>&rarr;</span></p>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:w-2/3 self-center my-10 gap-3">
          <div className="flex w-full">
            <div className="flex flex-col bg-gray-100 p-5 group h-max w-full">
              <img className="w-10 mb-40" src="data:image/png;base64,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" />
              <div className="flex flex-col">
                <p className="text-black">Geometrics names us in top 1%</p>
                <a href="#" className="flex items-center justify-center overflow-hidden h-0 group-hover:h-[1.25rem] w-full text-center bg-black hover:bg-black/80 transition-all text-white text-sm uppercase mt-2">Read More</a>
              </div>
            </div>
          </div>

          <div className="flex w-full">
            <div className="flex flex-col bg-gray-100 p-5 group h-max w-full">
              <img className="w-10 mb-40" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nM2ayWsVQRDGfzEBoznGaPAkuOAS14AriuJ2cEGN/4DiRVE8uB0EFfcFNW4HLyoJqBd3D6KoCF7EuC9IPAneFI0aI0bxSYd6oSl65s1Mz7yXDxoePT3VVdPV1V9VP0gXFUAd0ABsBPYDJ6Xtl74GGWPG9ij0B9YBN4HvQC5i+wbcANYCNaU0YBpwFeiMoXxQMzKuAFOLacBY4F4E5b4ArUCLtFbpK/TeXWBMlgb0AY4CfwIUeAzsAmYXcBXzbA6wG3gSIOsPcBioTNuI4cALx4Q/ZELzPClGAEeAdof8Z8CwtIyYKRtTfzEzeXVakwD9gEbHin8FZvgKXwz8UoJfZuzDY4FXak6jw0KfldBGnJW9kjX6Ak1q7g5gelxBwx3uZDZnMVEG7HG42dCoAiplk9kCdlI67FW6vIjqFUcd7lRKlAHNSqdDhV4araLGK/HXUqMP8FxFTRMUAnFfDc70hI2J8cBfS7/bYdzJXj5zTvQ0HFc6TnYNuqpO7DQPu7RQA/y09LzsGmCzWEM7soShHVslOj6K+W6jYs2GEXRjrVoyH+5USHl70+YDShyMUu+vsR/eVCw2LQwC1gMPQ2j7tgRyn1rvX893VqhTfGcRlLfbSM9Dsg0oR/JnW/DsIiif1K3ymOv6GMtVZ03Gyvu6lUGtkrPUdG6xOkwqmrXyvm6VR5slZ5Pp2Gd1vMONpY5oE7V9BC46+l/jh1ZLlmHJnIgQsc4lNMJURoYAHxzPtnsa0mLJOh7VkF7AIuBORAN+iQsa5nohA7dyGhLFtTR5awqpZ72xyOaqlKNVkGt1JX2bY2x2HTl2AJ/l3X/AaYv2DwmpPCaNVqGbvSFh+M2jClgptao8eqvTN223qlXylri4i61QUhwOMSINt5qnZI5wURRTLfTBLHGzIEN8o5Xe190URZNGU8b0wYoCEc3XrVDFkWuE0PiupfLIrz9l6FajlMzVYYmVb5q7J8NodcyS99uVyV6xBrTrzCsmBsokabvVAJXqXnINmqImNSmlD5ozcKtTSubEoIF3VTlonMekE1J2q3pVDroVNrhO7ZXXngW6Bym5VZVQn1g1N32YNQn5S4IlKbhVGXBe6XQgyosuetHF9xPAHFRnhAYlxUGly/M4V3LDpIRvC9jrsTJJUCZfPqdI7eC4gmY4Lnqai1TUrnK4U4eUdRNhoQiwBb6RnCQr1ANvHUYs8BU83eFmfyWzrEn5HxSnVIjNu1PildAYGpBf/JSLoZGe3KlRndg5aS1J9kQhVMpNUVCK+0Si2zyhEmFJ0Xyh4vqKLyetU/6EYyJoZqiTS5ZcgWbc8b31F473Kj0NardklYqGSULaXOQwbvstsiZSQlRLTnA94hfPtzZJilb3xEulctn4y4ANsg9MdDPN/DZ9pmppErfu9DQN/Acp2ry9ed1UrwAAAABJRU5ErkJggg==" />
              <div className="flex flex-col">
                <p className="text-black">Millennium receives #1 Supplier award from Agile One</p>
                <a href="#" className="flex items-center justify-center overflow-hidden h-0 group-hover:h-[1.25rem] w-full text-center bg-black hover:bg-black/80 transition-all text-white text-sm uppercase mt-2">Read More</a>
              </div>
            </div>
          </div>

          <div className="flex w-full">
            <div className="flex flex-col bg-gray-100 p-5 group h-max w-full">
              <img className="w-10 mb-40" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQUlEQVR4nO2d24tNYRjGf0wkMk7/gAblgqsZphziwuFGbin3knM5lgtccTVJuTVKkkNK/gflDiXK4cIpZ5JRDF59+SbaYc9aa6/9vfPt51fPzbTXtL/n+d619vq+vd8FQgghhBBCCCGKMAfYBwxG7QV6Cv0H0RImAieBYcAaFP52Apggr9vDeODqX4Jo1JX4WlEzW0cRxog2K436eVQgkAcKpF56CoQxotkKpT6WlQhkqQKpj5UlAgnHCAWSP/OAgRIVMhCPFS1gGrADuF0iiEbdBLYD3UqmON3AUeB9C4Jo1DvgCDBVwYyOjcDzGoJo1DNgg0L5NzOAC20IolHn46lR/MFc4F6CMEZ0H5ivRH7RH8/rllhvgb5OD2Ux8MFBGBYVPkT00qGENaYXDkKwBr2KG18dxSTglgPz7T/3LOE9dgynHJhuTRR2JDtmxfaHA8OticJ7XEHmdLVoGcTaeOrKeht4kwOTraCyvZsfB9xxYLAVVKjoLCmzuWROFK572XHGgbFWUqfJ8GL+2oGxVlJv4hiyYYkDU62iwppbNuxxYKhV1G4y4pwDQ62izpIRNxwYahV1nYxox5as1aynZMQnB4ZaRX0kI747MNQqKowhGywTZUNqI02BKBDXpJ7ZpgpRIK5JPbNNFaJAXJN6ZpsqRIG4JvXMNlWIAnFN6pltqhAF4prUM9tUIQrENalntqlCFIhrUs9sU4UoENekntmmClEgrkk9s00VokBck3pmmyrkN7McGGktUhjLmKavYFtXc64nY7WpZviB5y7giwMTrcUajg3Qxo+lbnCXHBhnNesaMBPnhE46Dx2YZW3S4/hzPZfszPQUZU30NY7dFfsdGGOJFZ5d4oLpwJADQyyxhrz0blztwAxzolU4YK0DI8yJ1uDklPXZgRmWWG5OWYEDDgyxxHJzUR9hG/DSgTHWZoVGnltwSld8Ck5vh6gnt6Y0QgiRIb3AxYrq2BbiddDfgk9Di1IPIicmV1wvCzeuU1IPIjcuVwgkbJiJFrMQ+FYijHDMAqVRD4dKBHJQYdT75YnjBcI4Fo8RNbO+yTOr7gLrlEJ76QKWx6/kDMbu04djW3CtLwkhhBBCCCEEo+MnFq13Zmj0qZwAAAAASUVORK5CYII=" />
              <div className="flex flex-col">
                <p className="text-black">Announcement in May</p>
                <a href="#" className="flex items-center justify-center overflow-hidden h-0 group-hover:h-[1.25rem] w-full text-center bg-black hover:bg-black/80 transition-all text-white text-sm uppercase mt-2">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col bg-black p-5 sm:p-20 sm:pb-10 relative z-[55]">
        <div className="flex w-full items-start justify-between">
          <a href="#" className="flex flex-row items-end bg-gradient-to-br from-blue-500 to-blue-300 text-6xl bg-clip-text text-white hover:text-transparent transition-all duration-700">let's<br />work.</a>
          <img className="h-10" src={logo.src} alt="Footer Logo" />
        </div>
        <div className="flex w-full items-start justify-between text-sm mt-20">
          <div className="flex flex-col text-gray-300 w-max">
            <p className="py-1 border-b border-gray-300 w-max">HEADQUARTERS</p>
            <div className="flex flex-col my-4">
              <p>2000 Town Center, Suite 300</p>
              <p>Southfield, MI 48075</p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row gap-2">
                <img className="h-4 invert" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEmklEQVR4nO2dW4iWRRiAnzU7bgcrKrPWoIMFeSHlTRFJF3UVHeiAhVlRbKUmdaWm4IUU0lUHO11EEQRFUrYdoIN2MoiCSIKMKEkzo3JNazcrcidG3p/dzX93v/n+bw7ffO8D7+XuPzPP7vf9M/POO6AoiqIoiqKkzxRgKfAp8CfwF7AJWA50x25c07gO+AUwY8TXwMmxG9kEJgOrxxExMjYCk2I3OGeOA94vKKMVC2M3OlfOkMeQcYwB+VmlQi6c4H0xUWwAuqpsUJOZJ9+eTIdxR+yO5MBtwL4KZLQeXafH7lCdub1CGa1Yr4+ucswFhiqW0QorWnHgfGDQkwwbe4DpLg1qMnZmvcOjjFa8GbujdeG1ADJacWvszqbOpQFl2PgNOCV2p1OmL7AQA7weu9Mp0x9BiAFuit3xVBmIJKRfl+nbsyWSECNfJpT/8UlEIQa4UY2M5rnIQnYCJ6mUYe6NLMQA96uQYeYkIORbFTLMocAfkYUMqJB4SyemTfysQkZzV2Qhb6uQ0ZwA/BNRyJ0q5EDWRZKxBzhKhRzI1ZGErFAZ7TkI+C6wjO3AESoknUniPJUxPkfLBlIIGZ9p/m8xVgQScrH+dxTjSJmo+ZSxVmW4cY9HGX8DZ6oQNw4pmfFeJB5XGWllo2yV8yZKCV71+A7pUiPuTAN2e5KyTIWUY6EnIfuAy1WKO/bw5oeepOwGzlUp7pzqMaFuO9CjUty5xpMQA3wpxQgUR572KOU92d9XHOj2OGE0wAuyDaA4cJ4sf/iS8qyuAruzyKMQI8srOnF05CnPUh4q8YfSaA4uUf/ENVbF7mTdsEnS2zxLWR27k3Vjlufj1AZ4TN8pbtzgseCAkXhCv325cZ9nIQZ4XgqpKQVZE0DKi7KjqRRcGX4pgJQNwDFqpBiHAR8EkLKpgwIENv/sbuBdWcUelMOvDwAn5ij6WFnB9S1lq+N+il2LWznBAaVfpSpSlnOUzQGk/A5cNUFbuqS87feO1SayKwHSE+gc/JBMINutf10CfF7y99q02l4yw5b3+yGAFCPZLK2NrhkVnnnpk4SPbDgb+CmQlC3Akx5OhO0CbiYjZnZYctYkEm9IjkEWnAP8mMCgVnEMrzeXPZsZAd8pvuOtXOpInibVG0wGYSeVS3JY+OwBvklgQKsKm0x4FjVnWqAZfaiwKwAL6v5umRJo7Stk2ByzqdR8QXJtAgNZZWyu+/VPk4BHExjIKsNu2tWeZQG2g0PFF2TCXLn9zdQ8bB+ySlndlsCgdnr+Jbs9lY8SGNiyYW+ry47JwCMJDG6ZsOf9s2VBRXdihYodTagDNivQtnCnYb8lXklDOBx4OIFBHy8epIFcK7t4JrF4p8nZldMDHIlwia/08Cr7V1Z7ZRcvpgybz6VVjkZg97lfiSRjL3DByMYow1wmj45QMv4Frh/x+coYx+0WBUg9svVa5rdrgNKebtnv7vck45YxPlcpIKa3wknl3lwTsmNsgl0BvNxB8QO7JDI7eMsbwPFy1/u6gvenDEmVCXtxgeIZe0TuImAx8AzwsZRdH5QM+D65iUhRFEVRFEUhZf4D55VjutmdYkIAAAAASUVORK5CYII=" />
                <p>248-213-1800</p>
              </div>
              <div className="flex flex-row gap-2">
                <img className="h-4 invert" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEb0lEQVR4nO2cW8hVRRiGn9JSO1mmHbCQUEMKIU8U0QkqiuiAVChIKhTedultl10lXqohURadoCjoHERFUXSiJLPQ8ESJop2P5hcLZtPPas38e+9/rTXf3vt94b352Xvmne/91sysb2b/IAiCIAiCIAiCIAiCIAiCIAwHTMRTDLILEJEh5jgRsgsQkSHmOBH41YEIkf8MuQzYraDgISm2dba+M4BXHAiyEeXfwPry+8gJ4Y//OBBoI8QDwJWpF8XbgB8cCLUR4DvA+WUDTq4w5RJgpwPBNsTcAEyueiLerXIJmA684EC4DRl/AVYmZqfkPKZ1hVrN+BpYOE6c0yt9wC3AEQfZZQPMF4EzK2Jb7HBfHvO5/33xMWBaxRfnAV84GJgNGI8DDwInVsS0eAfcVfp8ZSMfA3MqGjgNeNrBIG1AeBi4KTLrrIpUSaKNHQKuj8x394cpLveAzTE/AS6qiN/k8MTEvpdsNLWuXAscdDBwc8hHgVMqYjYbeG+c73bVwRORDi4EPnQQAHPCP8LsUYWrge+6aKPrzj6NPIJTga0OgmGZuQ+4ImLGOuCvLtvpeZG6sYZOh41vAedGNkFP9dhWz50fC+tKsbiXcVWXj+UwbWk3Rkog8/t8TehbzJPAqZGF630HwbKG+RNwV2S2uBU42me7ExK1A1hQIWgKsNlB0KwhfgVcWjHuScADEzzCmLC4H4E7IpmyGvjNQQCtRj4fCq9lnA28WkP7jZcHlgB7HATSJsjU2rmoxmPw2gtoVdkzC3jTQVCtTxZVixsis8A9Nc8CtYvfGQ64ei0ZmFN+FKnrTQk7rLr7a2wHcmePRTVzyE2RE9ULGtxJZis7e7569Dtwb6KG932DfTc+uJeAsyK7ktccBN9KLDYgyxJV7qarEa0M8pvI0eWk8BQdd2CEheQpTvDKOB14piUNrQ32Z+DuyDSwIhz+WyampteLge0tanFT+1kQ3vzbNqN4sV0eSZTbM9xRaz0AneroORUBOAN4rkUdnwFznU2lWQwpuDexeK5v4Urr45Hi6Ezg9YxxydZxZ3u5toGKqfV5LL0Y+DZzTLJ2PvYF7KTImcL2li42eymEZhfQ4dvAeZEt57NNXWwOJZAtDsbvzhAD9gOXJ9aVYzU/gcUljQ8cjNutIRZubtwXmVZu7vFKazEFrYm0dZ3Ta0zZBfRa2JsLfF7DxeZ+n7aRNcQSP5Uorh490sfF5rrWo5E1xMbZGZWvHqVKIEUl4EsH4xl4Q2ycd4drQjk8dbF5ZeZa2dAZYoEPh21qGXMip3pFzewhB7qH1hBL/FSi6hz/DQd6h94QS/xUooOlA3zTJbuAuteVdcCfDvSNnCE25t9RzA7c5kDPyBtiDoIoQ8gfOBlC/mDJEPIHSIaQPygyxEEgzAmzCxCRIeY4EbILEJEh5jgRsgsQkSHmOBGyCxCRIeY4EbILEJEh5jgRsgsQkSHmOBGyCxCRIeY4EbILEJEh5jgRBEEQBEEQBEEQBEEQBEEQBAYd/wJswQsxv2PVfAAAAABJRU5ErkJggg==" />
                <p>info@webmsi.com</p>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between text-sm w-max">
            <div className="flex flex-col items-end text-end text-gray-300">
              <p className="py-1 border-b border-gray-300 w-max">GROUP OF COMPANIES</p>
              <div className="flex flex-col my-4">
                <p>Millennium Software, Inc. (IT Staffing)</p>
                <p>Millennium Engineering Staffing, LLC</p>
                <p>Millennium General Staffing, LLC</p>
                <p>Millennium Healthcare Staffing, LLC</p>
                <p>Millennium Real Estate, LLC</p>
                <p>New Millennium Software Canada, Inc.</p>
                <p>Anvaya Digital Inc.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-[1px] bg-white/40 my-10"></div>
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-white text-[0.75rem]">Millennium Software &copy; 2024, All Rights Reserved</p>
          <p className="text-gray-400 text-[0.75rem]">Made by Lohit Chhabra</p>
        </div>
      </footer>
    </>
  );
}

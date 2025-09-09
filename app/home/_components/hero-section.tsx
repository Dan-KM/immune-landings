"use client"
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
      <>
        {/* Hero Section */}
        <section className="relative w-full h-full min-h-screen overflow-hidden flex items-center justify-center">
          {/* Gradient Background */}
          <div className="absolute inset-0">
            <ShaderGradientCanvas className="w-full h-full" lazyLoad={false}>
              <ShaderGradient
                control="query"
                grainBlending={0.2}
                grain="on"
                urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=1&cPolarAngle=70&cameraZoom=1&color1=%2302343B&color2=%2304A699&color3=%23014737&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=20&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=2&positionX=-0.7&positionY=-1.9&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0&rotationX=10&rotationY=0&rotationZ=90&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=2.1&uFrequency=1.5&uSpeed=0.1&uStrength=1&uTime=0&wireframe=false&zoomOut=false"
              />
            </ShaderGradientCanvas>
          </div>

          <div className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500" />

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6 py-20 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Smart Vaccination Tracking &{" "}
              <span className="text-[#04A699]">Reminders</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              For Every Community
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Helping health workers and mothers stay on track with child
              immunizations through SMS, USSD, and AI-powered tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-[#04A699] hover:bg-[#038C7F] text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 flex items-center gap-2 min-w-48">
                Get Started Free <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-[#04A699] hover:bg-[#04A699] text-[#04A699] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 min-w-48">
                Partner With Us
              </button>
            </div>
          </div>
        </section>
      </>
    );
}

export default HeroSection;
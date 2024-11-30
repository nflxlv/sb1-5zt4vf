'use client'

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

export function BeforeAfterSlider() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Rezultaty stosowania Glukofinu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">2 tygodnie stosowania</h3>
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/images/before-2weeks.jpg"
                    alt="Przed rozpoczęciem stosowania"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/images/after-2weeks.jpg"
                    alt="Po 2 tygodniach stosowania"
                  />
                }
                position={50}
                className="rounded-lg"
              />
              <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-gray-600">Przed</p>
                  <p className="text-xl font-bold text-red-600">180 mg/dL</p>
                </div>
                <div>
                  <p className="text-gray-600">Po</p>
                  <p className="text-xl font-bold text-green-600">140 mg/dL</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">1 miesiąc stosowania</h3>
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/images/before-1month.jpg"
                    alt="Przed rozpoczęciem stosowania"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/images/after-1month.jpg"
                    alt="Po miesiącu stosowania"
                  />
                }
                position={50}
                className="rounded-lg"
              />
              <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-gray-600">Przed</p>
                  <p className="text-xl font-bold text-red-600">175 mg/dL</p>
                </div>
                <div>
                  <p className="text-gray-600">Po</p>
                  <p className="text-xl font-bold text-green-600">120 mg/dL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
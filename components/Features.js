/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
    {
        name: 'Competitive exchange rates',
        description:
            'Easy access to global transactions at the tip of your finger, exchange your local currency for international currencies.',
        icon: GlobeAltIcon,
    },
    {
        name: 'No hidden fees',
        description:
            'All in-app transfers and payments are free with zero charges, helping you save more for future expenses.',
        icon: ScaleIcon,
    },
    {
        name: 'Transfers are instant',
        description:
            'From anywhere to any region across africa, instant transfers and payments with instant remittances, no more waiting.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Mobile notifications',
        description:
            'Always be in the know of your transactions with our mobile notifications at the comfort 24/7.',
        icon: AnnotationIcon,
    },
]

export default function Features() {
    return (
        <div className="py-10 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">
                <div className="lg:text-center">
                    <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to send money
                    </p>
                    <p className="mt-4 max-w-2xl text-base text-gray-500 lg:mx-auto">
                        Start sending money to your loved ones with peace of mind even to the hardest to reach regions across Africa.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

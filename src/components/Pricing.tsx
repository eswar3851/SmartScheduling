'use client'

import React, { useState } from 'react'
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react'

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Lite',
      description: 'Perfect for small clinics and individual practitioners',
      price: { monthly: 29, annual: 290 },
      icon: Zap,
      color: 'blue',
      features: [
        'Unlimited appointments',
        'Patient management',
        'Basic calendar integration',
        'Email notifications',
        'Mobile responsive design',
        'Basic reporting',
        'Email support',
        'Up to 2 staff members'
      ],
      limitations: [
        'No advanced analytics',
        'No AI insights',
        'Limited customization'
      ],
      popular: false
    },
    {
      name: 'Pro',
      description: 'Advanced features for growing practices and clinics',
      price: { monthly: 79, annual: 790 },
      icon: Crown,
      color: 'purple',
      features: [
        'Everything in Lite',
        'Advanced analytics dashboard',
        'AI-powered insights',
        'Custom branding',
        'SMS notifications',
        'Telehealth integration',
        'Advanced reporting',
        'Priority support',
        'Up to 10 staff members',
        'API access',
        'Custom integrations',
        'White-label options'
      ],
      limitations: [],
      popular: true
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-primary-600',
          hover: 'hover:bg-primary-700',
          text: 'text-primary-600',
          border: 'border-primary-200',
          light: 'bg-primary-50'
        }
      case 'purple':
        return {
          bg: 'bg-purple-600',
          hover: 'hover:bg-purple-700',
          text: 'text-purple-600',
          border: 'border-purple-200',
          light: 'bg-purple-50'
        }
      default:
        return {
          bg: 'bg-gray-600',
          hover: 'hover:bg-gray-700',
          text: 'text-gray-600',
          border: 'border-gray-200',
          light: 'bg-gray-50'
        }
    }
  }

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your practice. No hidden fees, no long-term contracts. 
            Upgrade or downgrade anytime.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                isAnnual ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon
            const colors = getColorClasses(plan.color)
            const price = isAnnual ? plan.price.annual : plan.price.monthly
            const monthlyPrice = isAnnual ? Math.round(plan.price.annual / 12) : plan.price.monthly

            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                  plan.popular ? `${colors.border} ring-2 ring-offset-2 ring-purple-500` : 'border-gray-200'
                } overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm font-medium">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  {/* Plan header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-3 rounded-xl ${colors.light} mb-4`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {plan.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-gray-900">
                          ${monthlyPrice}
                        </span>
                        <span className="text-xl text-gray-500 ml-1">
                          /month
                        </span>
                      </div>
                      {isAnnual && (
                        <div className="text-sm text-gray-500 mt-1">
                          Billed annually (${price}/year)
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-gray-500 mb-3">Limitations:</h4>
                      <div className="space-y-2">
                        {plan.limitations.map((limitation, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0">×</div>
                            <span className="text-gray-500 text-sm">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                      plan.popular ? colors.bg : 'bg-gray-800 hover:bg-gray-900'
                    } ${colors.hover} flex items-center justify-center space-x-2`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer enterprise solutions for large healthcare organizations with custom 
              requirements, dedicated support, and advanced integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200">
                Contact Sales
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                View Enterprise Features
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Can I change plans anytime?
              </h4>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Is there a free trial?
              </h4>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial for both Lite and Pro plans with no credit card required.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h4>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Do you offer refunds?
              </h4>
              <p className="text-gray-600">
                Yes, we offer a 30-day money-back guarantee if you&apos;re not satisfied with our service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

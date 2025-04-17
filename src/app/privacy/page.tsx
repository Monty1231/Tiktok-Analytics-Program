'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function PrivacyPage() {
  return (
    <main className="container mx-auto p-6">
      <Card className="p-6">
        <CardHeader>
          <CardTitle className="text-2xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use,
            and protect your personal information when you use our service.
          </p>
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <ul className="list-disc list-inside">
            <li>Information you provide directly (e.g., email address).</li>
            <li>Usage data (e.g., pages visited, actions taken).</li>
            <li>Cookies and tracking technologies.</li>
          </ul>
          <h2 className="text-xl font-semibold">2. How We Use Information</h2>
          <ul className="list-disc list-inside">
            <li>To provide and maintain our service.</li>
            <li>To communicate updates or support.</li>
            <li>To monitor and analyze usage.</li>
          </ul>
          <h2 className="text-xl font-semibold">3. Third-Party Services</h2>
          <p>
            We may use third-party services (e.g., analytics, payment processors) that
            collect information on our behalf. Please review their privacy policies.
          </p>
          <h2 className="text-xl font-semibold">4. Security</h2>
          <p>We implement reasonable measures to protect your data, but no method is 100% secure.</p>
          <h2 className="text-xl font-semibold">5. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be posted here with a
            revised effective date.
          </p>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>For questions, email us at <a href="mailto:montygoldberg7@gmail.com" className="text-blue-600 underline">montygoldberg7@gmail.com</a>.</p>
        </CardContent>
      </Card>
    </main>
  )
}

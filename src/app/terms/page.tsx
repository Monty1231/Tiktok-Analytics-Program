'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function TermsPage() {
  return (
    <main className="container mx-auto p-6">
      <Card className="p-6">
        <CardHeader>
          <CardTitle className="text-2xl">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            These Terms of Service govern your use of our website and services. By
            accessing or using the service, you agree to these terms.
          </p>
          <h2 className="text-xl font-semibold">1. Use of Service</h2>
          <p>
            You may use the service for lawful purposes only. You agree not to:
          </p>
          <ul className="list-disc list-inside">
            <li>Violates any applicable laws or regulations.</li>
            <li>Infringe on our or others&apos; rights.</li>
            <li>Transmit harmful or malicious content.</li>
          </ul>
          <h2 className="text-xl font-semibold">2. Account Responsibility</h2>
          <p>
            If you create an account, you are responsible for safeguarding your login
            credentials and all activities under your account.
          </p>
          <h2 className="text-xl font-semibold">3. Intellectual Property</h2>
          <p>
            All content and code are our property or licensed to us. You may not
            reproduce or distribute without permission.
          </p>
          <h2 className="text-xl font-semibold">4. Disclaimer of Warranties</h2>
          <p>
            The service is provided &quot;as is&quot; without warranties of any kind, express or
            implied.
          </p>
          <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
          <p>
            We are not liable for any indirect or consequential damages arising from
            your use of the service.
          </p>
          <h2 className="text-xl font-semibold">6. Governing Law</h2>
          <p>
            These terms are governed by the laws of the state of New York, United
            States.
          </p>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>For questions about these terms, email <a href="mailto:montygoldberg7@gmail.com" className="text-blue-600 underline">montygoldberg7@gmail.com</a>.</p>
        </CardContent>
      </Card>
    </main>
  )
}

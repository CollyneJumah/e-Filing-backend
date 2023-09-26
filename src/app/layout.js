
import Layout from '@/components/Layout'
import './globals.css'

export const metadata = {
  title: 'Next Dashboard Template',
  description: 'Next JS Dashboard template',
}

export default function RootLayout({ children }) {
  return (
        <html lang="en">
         
            <body >
              <Layout>
                {children}
              </Layout>
            </body>
         
          
        </html>

  )
}

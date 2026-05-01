import { Provider } from "./components/ui/provider"
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Everything inside Provider can now use Chakra components */}
        <Provider>{children}</Provider>
        <GoogleAnalytics gaId="G-ZPYT6ZD6B8" />
      </body>
    </html>
  )
}
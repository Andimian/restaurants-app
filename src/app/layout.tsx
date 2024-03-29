import 'normalize.css';
import '@/app/ui/global.css';
import { StoreProvider } from '@/redux/store-provider';
import { Header } from '@/components/header/component';

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="layout">
                    <div className='container'>
                        <Header></Header>

                        <StoreProvider>
                            {children}
                        </StoreProvider>
                    </div>
                </div>

                <footer>
                    <div className='container'>
                        Телефон для связи: 44-44-44
                    </div>
                </footer>
            </body>
        </html>
    );
}

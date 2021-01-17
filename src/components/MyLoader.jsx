import React from 'react'
import ContentLoader from 'react-content-loader'

export const MyLoader = () => (
    
            <ContentLoader
                speed={2}
                width={280}
                height={460}
                viewBox="0 0 280 460"
                backgroundColor="#ffdf8c"
                foregroundColor="#ffffff">
                <rect x="101" y="380" rx="0" ry="0" width="280" height="0" />
                <circle cx="138" cy="111" r="111" />
                <rect x="0" y="240" rx="10" ry="10" width="280" height="24" />
                <rect x="0" y="279" rx="10" ry="10" width="280" height="85" />
                <rect x="0" y="377" rx="10" ry="10" width="90" height="30" />
                <rect x="95" y="391" rx="0" ry="0" width="0" height="1" />
                <rect x="147" y="377" rx="24" ry="24" width="133" height="41" />
            </ContentLoader>
    
)

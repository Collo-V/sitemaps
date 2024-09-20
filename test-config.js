const appConfig = {
    colors:{
        primary: '#485935',
        primaryLight: '#93A267',
        secondary: '#CE8E00',
        secondaryLight: '#FDBA11',
        textOverPrimary:'#FFFFFF',
        textOverSecondary:'#FFFFFF',
        black:'#FFFFFF',
        white:'#FFFFFF',
    },
    buttons:{
        primary: {
            type:'gradient',
            color:'#FFFFFF',
            firstBackgroundColor: 'secondary',
            secondBackgroundColor: 'secondaryLight',
            hoverTextColor: 'secondary',
        },
        secondary: {
            type:'plain',
            color:'#FFFFFF',
            firstBackgroundColor: 'primary',
            secondBackgroundColor: 'white',
            hoverTextColor: 'secondary',
        },
    },
    layout:{
        navbar:{
            topNav:{
                show:true,
                backgroundColor:'primary'
            },
            mainNav:{
                type:"categories",
                sections:'three'
            },
            mobNav:{},
            navSection:{
                minimized:true
            }
        },
        footer:{
            backgroundColor:'primary',
        },
        productCard:{
            type:'classic'
        },
        pages:{
            home:[
                {
                    type:"landing",
                    title:"Home",
                    layout:{
                        type:'withSideBanners',
                        backgroundColorType:'plain',
                        firstBackgroundColor:'primary',
                        secondBackgroundColor:'primary',
                    }
                },
                {
                    type: "categories",
                    title: "Shop By Categories",
                    layout: {
                        type:'slides',
                        itemType:'card',
                        textPosition:'bottom',
                        showName:true
                    }
                },
                {
                    type: "product-list",
                    title: "Our BestSellers",
                    layout: {
                        cardType:'classic'
                    },
                    dbQuery:'POPULAR'

                },
                {
                    type: "brands",
                    title: "Our Top Brands",
                    layout: {
                        type:'slides',
                        itemType:'circle',
                        textPosition:'center',
                    }
                },
                {
                    type: "product-list",
                    title: "On Offer",
                    layout: {
                        cardType:'classic'
                    },
                    dbQuery:'ON_OFFER'

                },
            ]
        },

    }

}
export default appConfig


        // const func1 = (callback) => {
        //     console.log("part 1");
        //     console.log("part 2");
        //     console.log("part 3");
        //     console.log("part 4");
        //     console.log("part 5");
        //     setTimeout(() => {
        //         callback();
        //     }, 5000);
        // }

        // func1(() => {
        //     console.log("Heer it is ended");
        // })

        /*_________________________________________________________________ */

        /*
            orded placed
            After 2s -> Chef received the order and started preparing
            After 10s -> Pizza sauce added
            After 5s -> First layer of cheeze added
            After 12s -> Tooping added
            After 5s -> Second layer of cheeze added
            After 15s -> Pizza backed
            After 8s -> Oregano added and packed
            After 2s -> Package recived at counter
        
            The order is ready and handed by the zomato guy
        
        */

        let executeOder = (callback => {
            console.log("Order Placed");
            setTimeout(() => {
                console.log("Chef received the order and started preparing");

                setTimeout(() => {
                    console.log(" Pizza sauce added");

                    setTimeout(() => {
                        console.log("First layer of cheeze added");

                        setTimeout(() => {
                            console.log("Tooping added");

                            setTimeout(() => {
                                console.log("Second layer of cheeze added");

                                setTimeout(() => {
                                    console.log("Pizza backed");

                                    setTimeout(() => {
                                        console.log("Oregano added and packed");

                                        setTimeout(() => {
                                            console.log("Package recived at counter");

                                            callback();
                                        }, 2000);

                                    }, 8000);

                                }, 15000);

                            }, 5000);

                        }, 12000);

                    }, 5000);

                }, 10000);

            }, 2000)

        });


        executeOder(()=>{
            console.log("Parcel is to paracel through deilvery boy")
        });
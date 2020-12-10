describe ("WhatDrink", function(){

    describe ("age-checking function", function(){
        it ("should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function(){
            expect(ageCheck(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        });
    });
    describe ("age-checking function", function(){
        it ("should return 'Drink Toddy'", function(){
            expect(ageCheck(13)).toBe("Drink Toddy")
        });
    });
    describe ("age-checking function", function(){
        it ("should return 'Drink Coke'", function(){
            expect(ageCheck(17)).toBe("Drink Coke")
        });
    });
    describe ("age-checking function", function(){
        it ("should return 'Drink Beer'", function(){
            expect(ageCheck(20)).toBe("Drink Beer")
        });
    });
    describe ("age-checking function", function(){
        it ("should return 'Drink Drink Whisky'", function(){
            expect(ageCheck(90)).toBe("Drink Whisky")
        });
    });
    describe ("age-checking function", function(){
        it ("should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function(){
            expect(ageCheck(170)).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        });
    });
});
(function () {
    'use strict';

    window.PRODUCTS = [
        { "name": "رز مصري بيوت الشام", "title": "رز مصري", "brand": "بيوت الشام", "price": 130, "image": "images/1.jpg", "alt": "رز مصري بيوت الشام", "category": "rice" },
        { "name": "رز كريمي كيلو سيدي هشام", "title": "رز كريمي (1 كغ)", "brand": "سيدي هشام", "price": 250, "image": "images/2.jpg", "alt": "رز كريمي كيلو سيدي هشام", "category": "rice" },
        { "name": "رز اسباني كيلو سيدي هشام", "title": "رز اسباني (1 كغ)", "brand": "سيدي هشام", "price": 250, "image": "images/3.jpg", "alt": "رز اسباني كيلو سيدي هشام", "category": "rice" },
        { "name": "رز مصري كيلو الشيف نديم", "title": "رز مصري (1 كغ)", "brand": "الشيف نديم", "price": 130, "image": "images/4.jpg", "alt": "رز مصري كيلو الشيف نديم", "category": "rice" },
        { "name": "رز كبسة كيلو الشيف نديم", "title": "رز كبسة (1 كغ)", "brand": "الشيف نديم", "price": 130, "image": "images/5.jpg", "alt": "رز كبسة كيلو الشيف نديم", "category": "rice" },
        { "name": "رز كبسة طويل تايلاندي كيلو الريف", "title": "رز كبسة طويل تايلاندي (1 كغ)", "brand": "الريف", "price": 130, "image": "images/6.jpg", "alt": "رز كبسة طويل تايلاندي الريف", "category": "rice" },
        { "name": "رز اسباني 5 كيلو سيدي هشام", "title": "رز اسباني (5 كغ)", "brand": "سيدي هشام", "price": 1050, "image": "images/7.jpg", "alt": "رز اسباني 5 كيلو سيدي هشام", "category": "rice" },
        { "name": "رز صيني كيلو الريف", "title": "رز صيني (1 كغ)", "brand": "الريف", "price": 130, "image": "images/8.jpg", "alt": "رز صيني كيلو الريف", "category": "rice" },
        { "name": "رز استرالي كيلو الريف", "title": "رز استرالي (1 كغ)", "brand": "الريف", "price": 190, "image": "images/9.jpg", "alt": "رز استرالي كيلو الريف", "category": "rice" },
        { "name": "رز بسمتي كيلو ابو كاس", "title": "رز بسمتي (1 كغ)", "brand": "ابو كاس", "price": 250, "image": "images/10.jpg", "alt": "رز بسمتي كيلو ابو كاس", "category": "rice" },
        { "name": "رز بسمتي هندي 5 كيلو ابو كاس", "title": "رز بسمتي هندي (5 كغ)", "brand": "ابو كاس", "price": 1150, "image": "images/11.jpg", "alt": "رز بسمتي هندي 5 كيلو ابو كاس", "category": "rice" },
        { "name": "رز مصري كيلو الفخامة", "title": "رز مصري (1 كغ)", "brand": "الفخامة", "price": 140, "image": "images/12.jpg", "alt": "رز مصري كيلو الفخامة", "category": "rice" },
        { "name": "رز بسمتي كريمي كيلو الفخامة", "title": "رز بسمتي كريمي (1 كغ)", "brand": "الفخامة", "price": 220, "image": "images/13.jpg", "alt": "رز بسمتي كريمي كيلو الفخامة", "category": "rice" },
        { "name": "رز بسمتي الذهبي كيلو سيدي هشام", "title": "رز بسمتي الذهبي (1 كغ)", "brand": "سيدي هشام", "price": 250, "image": "images/14.jpg", "alt": "رز بسمتي الذهبي كيلو سيدي هشام", "category": "rice" },
        { "name": "رز اسباني كيلو حسين الناصر", "title": "رز اسباني (1 كغ)", "brand": "حسين الناصر", "price": 210, "image": "images/15.jpg", "alt": "رز اسباني كيلو حسين الناصر", "category": "rice" },
        { "name": "رز مصري كيلو حسين الناصر", "title": "رز مصري (1 كغ)", "brand": "حسين الناصر", "price": 140, "image": "images/16.jpg", "alt": "رز مصري كيلو حسين الناصر", "category": "rice" },
        { "name": "رز صيني كيلو الارجوان", "title": "رز صيني (1 كغ)", "brand": "الارجوان", "price": 130, "image": "images/17.jpg", "alt": "رز صيني كيلو الارجوان", "category": "rice" },
        { "name": "رز بسمتي كيلو ابو سيوف", "title": "رز بسمتي (1 كغ)", "brand": "ابو سيوف", "price": 260, "image": "images/18.jpg", "alt": "رز بسمتي كيلو ابو سيوف", "category": "rice" },
        { "name": "ذرة بوشار كيلو سيدي هشام", "title": "ذرة بوشار (1 كغ)", "brand": "سيدي هشام", "price": 130, "image": "images/19.jpg", "alt": "ذرة بوشار كيلو سيدي هشام", "category": "grains" },
        { "name": "فول كيلو سيدي هشام", "title": "فول (1 كغ)", "brand": "سيدي هشام", "price": 240, "image": "images/20.jpg", "alt": "فول كيلو سيدي هشام", "category": "grains" },
        { "name": "شوفان 500غ سيدي هشام", "title": "شوفان (500 غ)", "brand": "سيدي هشام", "price": 150, "image": "images/21.jpg", "alt": "شوفان 500غ سيدي هشام", "category": "grains" },
        { "name": "طحين زيرو الشيف نديم", "title": "طحين زيرو", "brand": "الشيف نديم", "price": 100, "image": "images/22.jpg", "alt": "طحين زيرو الشيف نديم", "category": "grains" },
        { "name": "عدس ابيض كيلو سيدي هشام", "title": "عدس ابيض (1 كغ)", "brand": "سيدي هشام", "price": 240, "image": "images/23.jpg", "alt": "عدس ابيض كيلو سيدي هشام", "category": "grains" },
        { "name": "فاصولياء بيضاء كيلو سيدي هشام", "title": "فاصولياء بيضاء (1 كغ)", "brand": "سيدي هشام", "price": 270, "image": "images/24.jpg", "alt": "فاصولياء بيضاء كيلو سيدي هشام", "category": "grains" },
        { "name": "برغل خشن كيلو الشيف نديم", "title": "برغل خشن (1 كغ)", "brand": "الشيف نديم", "price": 110, "image": "images/25.jpg", "alt": "برغل خشن كيلو الشيف نديم", "category": "grains" },
        { "name": "كشك كيلو سيدي هشام", "title": "كشك (1 كغ)", "brand": "سيدي هشام", "price": 400, "image": "images/26.jpg", "alt": "كشك كيلو سيدي هشام", "category": "grains" },
        { "name": "فاصولياء حمراء كيلو سيدي هشام", "title": "فاصولياء حمراء (1 كغ)", "brand": "سيدي هشام", "price": 260, "image": "images/27.jpg", "alt": "فاصولياء حمراء كيلو سيدي هشام", "category": "grains" },
        { "name": "عدس ابيض كيلو سيدي هشام", "title": "عدس ابيض (1 كغ)", "brand": "سيدي هشام", "price": 430, "image": "images/28.jpg", "alt": "عدس ابيض كيلو سيدي هشام", "category": "grains" },
        { "name": "قمح كيلو سيدي هشام", "title": "قمح (1 كغ)", "brand": "سيدي هشام", "price": 100, "image": "images/29.jpg", "alt": "قمح كيلو سيدي هشام", "category": "grains" },
        { "name": "عدس اسود كيلو معدنلي", "title": "عدس اسود (1 كغ)", "brand": "معدنلي", "price": 160, "image": "images/30.jpg", "alt": "عدس اسود كيلو معدنلي", "category": "grains" },
        { "name": "فول كيلو معدنلي", "title": "فول (1 كغ)", "brand": "معدنلي", "price": 250, "image": "images/31.jpg", "alt": "فول كيلو معدنلي", "category": "grains" },
        { "name": "حمص كيلو معدنلي", "title": "حمص (1 كغ)", "brand": "معدنلي", "price": 230, "image": "images/32.jpg", "alt": "حمص كيلو معدنلي", "category": "grains" },
        { "name": "عدس ابيض كيلو معدنلي", "title": "عدس ابيض (1 كغ)", "brand": "معدنلي", "price": 260, "image": "images/33.jpg", "alt": "عدس ابيض كيلو معدنلي", "category": "grains" },
        { "name": "عدس مجروش كيلو معدنلي", "title": "عدس مجروش (1 كغ)", "brand": "معدنلي", "price": 160, "image": "images/34.jpg", "alt": "عدس مجروش كيلو معدنلي", "category": "grains" },
        { "name": "برغل ناعم كيلو معدنلي", "title": "برغل ناعم (1 كغ)", "brand": "معدنلي", "price": 110, "image": "images/35.jpg", "alt": "برغل ناعم كيلو معدنلي", "category": "grains" },
        { "name": "فريكة كيلو سيدي هشام", "title": "فريكة (1 كغ)", "brand": "سيدي هشام", "price": 430, "image": "images/36.jpg", "alt": "فريكة كيلو سيدي هشام", "category": "grains" },
        { "name": "برغل خشن كيلو معدنلي", "title": "برغل خشن (1 كغ)", "brand": "معدنلي", "price": 110, "image": "images/37.jpg", "alt": "برغل خشن كيلو معدنلي", "category": "grains" },
        { "name": "بديل اللحمة خشنة 350غ زرزور", "title": "بديل اللحمة خشنة (350 غ)", "brand": "زرزور", "price": 180, "image": "images/38.jpg", "alt": "بديل اللحمة خشنة 350غ زرزور", "category": "meat" },
        { "name": "بديل اللحمة ناعمة 350غ زرزور", "title": "بديل اللحمة ناعمة (350 غ)", "brand": "زرزور", "price": 180, "image": "images/39.jpg", "alt": "بديل اللحمة ناعمة 350غ زرزور", "category": "meat" },
        { "name": "ملوخية مجففة 200غ الغوطة", "title": "ملوخية مجففة (200 غ)", "brand": "الغوطة", "price": 370, "image": "images/40.jpg", "alt": "ملوخية مجففة 200غ الغوطة", "category": "vegetables" },
        { "name": "برغل ناعم كيلو حسين الناصر", "title": "برغل ناعم (1 كغ)", "brand": "حسين الناصر", "price": 110, "image": "images/41.jpg", "alt": "برغل ناعم كيلو حسين الناصر", "category": "grains" },
        { "name": "ذرة بوشار كيلو معدنلي", "title": "ذرة بوشار (1 كغ)", "brand": "معدنلي", "price": 130, "image": "images/42.jpg", "alt": "ذرة بوشار كيلو معدنلي", "category": "grains" },
        { "name": "حمص كيلو حسين الناصر", "title": "حمص (1 كغ)", "brand": "حسين الناصر", "price": 190, "image": "images/43.jpg", "alt": "حمص كيلو حسين الناصر", "category": "grains" },
        { "name": "طحين كيلو معدنلي", "title": "طحين (1 كغ)", "brand": "معدنلي", "price": 100, "image": "images/44.jpg", "alt": "طحين كيلو معدنلي", "category": "grains" },
        { "name": "فاصولياء بيضاء كيلو حسين الناصر", "title": "فاصولياء بيضاء (1 كغ)", "brand": "حسين الناصر", "price": 220, "image": "images/45.jpg", "alt": "فاصولياء بيضاء كيلو حسين الناصر", "category": "grains" },
        { "name": "فريكة كيلو حسين الناصر", "title": "فريكة (1 كغ)", "brand": "حسين الناصر", "price": 420, "image": "images/46.jpg", "alt": "فريكة كيلو حسين الناصر", "category": "grains" },
        { "name": "سميد ناعم كيلو معدنلي", "title": "سميد ناعم (1 كغ)", "brand": "معدنلي", "price": 110, "image": "images/47.jpg", "alt": "سميد ناعم كيلو معدنلي", "category": "grains" },
        { "name": "قمح كيلو حسين الناصر", "title": "قمح (1 كغ)", "brand": "حسين الناصر", "price": 100, "image": "images/48.jpg", "alt": "قمح كيلو حسين الناصر", "category": "grains" },
        { "name": "كشكة كيلو معدنلي", "title": "كشكة (1 كغ)", "brand": "معدنلي", "price": 420, "image": "images/49.jpg", "alt": "كشكة كيلو معدنلي", "category": "grains" },
        { "name": "فاصولياء عريضة كيلو معدنلي", "title": "فاصولياء عريضة (1 كغ)", "brand": "معدنلي", "price": 440, "image": "images/50.jpg", "alt": "فاصولياء عريضة كيلو معدنلي", "category": "grains" },
        { "name": "كشك (500 غ) الشيف نديم", "title": "كشك (500 غ)", "brand": "الشيف نديم", "price": 200, "image": "images/51.jpg", "alt": "كشك (500 غ) الشيف نديم", "category": "grains" },
        { "name": "فاصولياء عريضة (1 كغ) الشيف نديم", "title": "فاصولياء عريضة (1 كغ)", "brand": "الشيف نديم", "price": 280, "image": "images/52.jpg", "alt": "فاصولياء عريضة (1 كغ) الشيف نديم", "category": "grains" },
        { "name": "فاصولياء عريضة (1 كغ) سيدي هشام", "title": "فاصولياء عريضة (1 كغ)", "brand": "سيدي هشام", "price": 280, "image": "images/53.jpg", "alt": "فاصولياء عريضة (1 كغ) سيدي هشام", "category": "grains" },
        { "name": "ترمس (1 كغ) سيدي هشام", "title": "ترمس (1 كغ)", "brand": "سيدي هشام", "price": 280, "image": "images/54.jpg", "alt": "ترمس (1 كغ) سيدي هشام", "category": "grains" },
        { "name": "عدس مجروش (1 كغ) الفخامة", "title": "عدس مجروش (1 كغ)", "brand": "الفخامة", "price": 140, "image": "images/55.jpg", "alt": "عدس مجروش (1 كغ) الفخامة", "category": "grains" },
        { "name": "برغل خشن (1 كغ) الفخامة", "title": "برغل خشن (1 كغ)", "brand": "الفخامة", "price": 110, "image": "images/56.jpg", "alt": "برغل خشن (1 كغ) الفخامة", "category": "grains" },
        { "name": "سميد (1 كغ) سيدي هشام", "title": "سميد (1 كغ)", "brand": "سيدي هشام", "price": 110, "image": "images/57.jpg", "alt": "سميد (1 كغ) سيدي هشام", "category": "grains" },
        { "name": "ملوخية (200 غ) تنورين", "title": "ملوخية (200 غ)", "brand": "تنورين", "price": 360, "image": "images/58.jpg", "alt": "ملوخية (200 غ) تنورين", "category": "vegetables" },
        { "name": "عدس ابيض (1 كغ) حسين الناصر", "title": "عدس ابيض (1 كغ)", "brand": "حسين الناصر", "price": 210, "image": "images/59.jpg", "alt": "عدس ابيض (1 كغ) حسين الناصر", "category": "grains" },
        { "name": "ملح (250 غ) الشيف نديم", "title": "ملح (250 غ)", "brand": "الشيف نديم", "price": 15, "image": "images/60.jpg", "alt": "ملح (250 غ) الشيف نديم", "category": "grains" },
        { "name": "طحين (1 كغ) سيدي هشام", "title": "طحين (1 كغ)", "brand": "سيدي هشام", "price": 100, "image": "images/61.jpg", "alt": "طحين (1 كغ) سيدي هشام", "category": "grains" },
        { "name": "برغل احمر خشن (1 كغ) سيدي هشام", "title": "برغل احمر خشن (1 كغ)", "brand": "سيدي هشام", "price": 110, "image": "images/62.jpg", "alt": "برغل احمر خشن (1 كغ) سيدي هشام", "category": "grains" },
        { "name": "برغل احمر ناعم (1 كغ) سيدي هشام", "title": "برغل احمر ناعم (1 كغ)", "brand": "سيدي هشام", "price": 110, "image": "images/63.jpg", "alt": "برغل احمر ناعم (1 كغ) سيدي هشام", "category": "grains" },
        { "name": "برغل خشن (1 كغ) سيدي هشام", "title": "برغل خشن (1 كغ)", "brand": "سيدي هشام", "price": 110, "image": "images/64.jpg", "alt": "برغل خشن (1 كغ) سيدي هشام", "category": "grains" },
        { "name": "عدس مجروش (1 كغ) سيدي هشام", "title": "عدس مجروش (1 كغ)", "brand": "سيدي هشام", "price": 150, "image": "images/65.jpg", "alt": "عدس مجروش (1 كغ) سيدي هشام", "category": "grains" },
        { "name": "عدس اسود (1 كغ) سيدي هشام", "title": "عدس اسود (1 كغ)", "brand": "سيدي هشام", "price": 150, "image": "images/66.jpg", "alt": "عدس اسود (1 كغ) سيدي هشام", "category": "grains" },
        { "name": "طحين (1 كغ) حسين الناصر", "title": "طحين (1 كغ)", "brand": "حسين الناصر", "price": 90, "image": "images/67.jpg", "alt": "طحين (1 كغ) حسين الناصر", "category": "grains" },
        { "name": "بوشار (1 كغ) حسين الناصر", "title": "بوشار (1 كغ)", "brand": "حسين الناصر", "price": 120, "image": "images/68.jpg", "alt": "بوشار (1 كغ) حسين الناصر", "category": "grains" },
        { "name": "فول (1 كغ) حسين الناصر", "title": "فول (1 كغ)", "brand": "حسين الناصر", "price": 120, "image": "images/69.jpg", "alt": "فول (1 كغ) حسين الناصر", "category": "grains" },
        { "name": "شرائح اناناس (565 غ) سيدي هشام", "title": "شرائح اناناس (565 غ)", "brand": "سيدي هشام", "price": 190, "image": "images/70.jpg", "alt": "شرائح اناناس (565 غ) سيدي هشام", "category": "canned" },
        { "name": "سردين (125 غ) بيوت الشام", "title": "سردين (125 غ)", "brand": "بيوت الشام", "price": 80, "image": "images/71.jpg", "alt": "سردين (125 غ) بيوت الشام", "category": "canned" },
        { "name": "فطر شرائح (350 غ) الدرة", "title": "فطر شرائح (350 غ)", "brand": "الدرة", "price": 270, "image": "images/72.jpg", "alt": "فطر شرائح (350 غ) الدرة", "category": "canned" },
        { "name": "مسبحة (400 غ) سولو", "title": "مسبحة (400 غ)", "brand": "سولو", "price": 120, "image": "images/73.jpg", "alt": "مسبحة (400 غ) سولو", "category": "canned" },
        { "name": "تونا سكيب جاك (140 غ) ليو", "title": "تونا سكيب جاك (140 غ)", "brand": "ليو", "price": 130, "image": "images/74.jpg", "alt": "تونا سكيب جاك (140 غ) ليو", "category": "canned" },
        { "name": "فطر مقطع (375 غ) ليو", "title": "فطر مقطع (375 غ)", "brand": "ليو", "price": 210, "image": "images/75.jpg", "alt": "فطر مقطع (375 غ) ليو", "category": "canned" },
        { "name": "سردين حلو (125 غ) ليو", "title": "سردين (125 غ)", "brand": "ليو", "price": 120, "image": "images/76.jpg", "alt": "سردين حلو (125 غ) ليو", "category": "canned" },
        { "name": "حمص حب (370 غ) زهر البستان", "title": "حمص حب (370 غ)", "brand": "زهر البستان", "price": 100, "image": "images/77.jpg", "alt": "حمص حب (370 غ) زهر البستان", "category": "canned" },
        { "name": "تونا تونغول حار دايت (185 غ) سيدي هشام", "title": "تونا تونغول حار دايت (185 غ)", "brand": "سيدي هشام", "price": 210, "image": "images/78.jpg", "alt": "تونا تونغول حار دايت (185 غ) سيدي هشام", "category": "canned" },
        { "name": "تونا سكيب جاك حلو (160 غ) سيدي هشام", "title": "تونا سكيب جاك حلو (160 غ)", "brand": "سيدي هشام", "price": 150, "image": "images/79.jpg", "alt": "تونا سكيب جاك حلو (160 غ) سيدي هشام", "category": "canned" },
        { "name": "حمص حب تنورين", "title": "حمص حب", "brand": "تنورين", "price": 110, "image": "images/80.jpg", "alt": "حمص حب تنورين", "category": "canned" },
        { "name": "بازيلاء (800 غ) تنورين", "title": "بازيلاء (800 غ)", "brand": "تنورين", "price": 180, "image": "images/81.jpg", "alt": "بازيلاء (800 غ) تنورين", "category": "canned" },
        { "name": "بازيلاء (400 غ) تنورين", "title": "بازيلاء (400 غ)", "brand": "تنورين", "price": 100, "image": "images/82.jpg", "alt": "بازيلاء (400 غ) تنورين", "category": "canned" },
        { "name": "مرتاديلا دجاج (850 غ) زينة", "title": "مرتاديلا دجاج (850 غ)", "brand": "زينة", "price": 290, "image": "images/83.jpg", "alt": "مرتاديلا دجاج (850 غ) زينة", "category": "canned" },
        { "name": "مرتاديلا (200 غ) زينة", "title": "مرتاديلا (200 غ)", "brand": "زينة", "price": 90, "image": "images/84.jpg", "alt": "مرتاديلا (200 غ) زينة", "category": "canned" },
        { "name": "مرتاديلا دجاج (380 غ) هنا", "title": "مرتاديلا دجاج (380 غ)", "brand": "هنا", "price": 160, "image": "images/85.jpg", "alt": "مرتاديلا دجاج (380 غ) هنا", "category": "canned" },
        { "name": "مرتاديلا دجاج (1820 غ) هنا", "title": "مرتاديلا دجاج (1820 غ)", "brand": "هنا", "price": 470, "image": "images/86.jpg", "alt": "مرتاديلا دجاج (1820 غ) هنا", "category": "canned" },
        { "name": "مرتاديلا دجاج (850 غ) هنا", "title": "مرتاديلا دجاج (850 غ)", "brand": "هنا", "price": 330, "image": "images/87.jpg", "alt": "مرتاديلا دجاج (850 غ) هنا", "category": "canned" },
        { "name": "ذرة (330 غ) الدرة", "title": "ذرة (330 غ)", "brand": "الدرة", "price": 90, "image": "images/88.jpg", "alt": "ذرة (330 غ) الدرة", "category": "canned" },
        { "name": "ذرة (2600 غ) الدرة", "title": "ذرة (2600 غ)", "brand": "الدرة", "price": 500, "image": "images/89.jpg", "alt": "ذرة (2600 غ) الدرة", "category": "canned" },
        { "name": "مرتاديلا (200 غ) الدرة", "title": "مرتاديلا (200 غ)", "brand": "الدرة", "price": 100, "image": "images/90.jpg", "alt": "مرتاديلا (200 غ) الدرة", "category": "canned" },
        { "name": "مرتاديلا (380 غ) الدرة", "title": "مرتاديلا (380 غ)", "brand": "الدرة", "price": 160, "image": "images/91.jpg", "alt": "مرتاديلا (380 غ) الدرة", "category": "canned" },
        { "name": "مرتاديلا (850 غ) الدرة", "title": "مرتاديلا (850 غ)", "brand": "الدرة", "price": 310, "image": "images/92.jpg", "alt": "مرتاديلا (850 غ) الدرة", "category": "canned" },
        { "name": "ورق عنب (1300 غ) الدرة", "title": "ورق عنب (1300 غ)", "brand": "الدرة", "price": 480, "image": "images/93.jpg", "alt": "ورق عنب (1300 غ) الدرة", "category": "canned" },
        { "name": "ورق عنب (600 غ) الدرة", "title": "ورق عنب (600 غ)", "brand": "الدرة", "price": 260, "image": "images/94.jpg", "alt": "ورق عنب (600 غ) الدرة", "category": "canned" },
        { "name": "ارضي شوكي (1300 غ) الدرة", "title": "ارضي شوكي (1300 غ)", "brand": "الدرة", "price": 530, "image": "images/95.jpg", "alt": "ارضي شوكي (1300 غ) الدرة", "category": "canned" },
        { "name": "ارضي شوكي (1200 غ) زهرة البستان", "title": "ارضي شوكي (1200 غ)", "brand": "زهرة البستان", "price": 560, "image": "images/96.jpg", "alt": "ارضي شوكي (1200 غ) زهرة البستان", "category": "canned" },
        { "name": "يالنجي (400 غ) زهرة البستان", "title": "يالنجي (400 غ)", "brand": "زهرة البستان", "price": 220, "image": "images/97.jpg", "alt": "يالنجي (400 غ) زهرة البستان", "category": "canned" },
        { "name": "ورق عنب (1250 غ) زهرة البستان", "title": "ورق عنب (1250 غ)", "brand": "زهرة البستان", "price": 520, "image": "images/98.jpg", "alt": "ورق عنب (1250 غ) زهرة البستان", "category": "canned" },
        { "name": "ذرة (340 غ) الغوطة", "title": "ذرة (340 غ)", "brand": "الغوطة", "price": 130, "image": "images/99.jpg", "alt": "ذرة (340 غ) الغوطة", "category": "canned" },
        { "name": "مسبحة (380 غ) الغوطة", "title": "مسبحة (380 غ)", "brand": "الغوطة", "price": 170, "image": "images/100.jpg", "alt": "مسبحة (380 غ) الغوطة", "category": "canned" },
        { "name": "مزيل بقع 700 مل برافو", "title": "مزيل بقع (700 مل)", "brand": "برافو", "price": 290, "image": "images/101.jpg", "alt": "مزيل بقع 700 مل برافو", "category": "cleaners" },
        { "name": "سائل غسيل لتر كان", "title": "سائل غسيل (لتر)", "brand": "كان", "price": 380, "image": "images/102.jpg", "alt": "سائل غسيل لتر كان", "category": "cleaners" },
        { "name": "منظف مطابخ 500مل جت", "title": "منظف مطابخ (500 مل)", "brand": "جت", "price": 200, "image": "images/103.jpg", "alt": "منظف مطابخ 500مل جت", "category": "cleaners" },
        { "name": "صابون سائل 500مل برافو", "title": "صابون سائل (500 مل)", "brand": "برافو", "price": 200, "image": "images/104.jpg", "alt": "صابون سائل 500مل برافو", "category": "cleaners" },
        { "name": "شامبو بالكيراتين 350مل اوليفا", "title": "شامبو بالكيراتين (350 مل)", "brand": "اوليفا", "price": 240, "image": "images/105.jpg", "alt": "شامبو بالكيراتين 350مل اوليفا", "category": "cleaners" },
        { "name": "شامبو للأطفال 450مل بوني", "title": "شامبو للأطفال (450 مل)", "brand": "بوني", "price": 240, "image": "images/106.jpg", "alt": "شامبو للأطفال 450مل بوني", "category": "cleaners" },
        { "name": "شامبو للأطفال 750 مل نورا", "title": "شامبو للأطفال (750 مل)", "brand": "نورا", "price": 340, "image": "images/107.jpg", "alt": "شامبو للأطفال 750 مل نورا", "category": "cleaners" },
        { "name": "بديل الزيت 275مل اوليفا", "title": "بديل الزيت (275 مل)", "brand": "اوليفا", "price": 400, "image": "images/108.jpg", "alt": "بديل الزيت 275مل اوليفا", "category": "cleaners" },
        { "name": "جل شعر 100مل كليستو", "title": "جل شعر (100 مل)", "brand": "كليستو", "price": 120, "image": "images/109.jpg", "alt": "جل شعر 100مل كليستو", "category": "cleaners" },
        { "name": "معطر ملابس 450مل رينزو", "title": "معطر ملابس (450 مل)", "brand": "رينزو", "price": 320, "image": "images/110.jpg", "alt": "معطر ملابس 450مل رينزو", "category": "cleaners" },
        { "name": "ملمع زجاج 500مل نورا", "title": "ملمع زجاج (500 مل)", "brand": "نورا", "price": 180, "image": "images/111.jpg", "alt": "ملمع زجاج 500مل نورا", "category": "cleaners" },
        { "name": "أقراص للجلاية عدد 30 قرص سوار", "title": "أقراص للجلاية (30 قرص)", "brand": "سوار", "price": 820, "image": "images/112.jpg", "alt": "أقراص للجلاية عدد 30 قرص سوار", "category": "cleaners" },
        { "name": "شاور جل 350مل كليستو", "title": "شاور جل (350 مل)", "brand": "كليستو", "price": 280, "image": "images/113.jpg", "alt": "شاور جل 350مل كليستو", "category": "cleaners" },
        { "name": "شامبو 200مل كليستو", "title": "شامبو (200 مل)", "brand": "كليستو", "price": 180, "image": "images/114.jpg", "alt": "شامبو 200مل كليستو", "category": "cleaners" },
        { "name": "بلسم 350 مل كليستو", "title": "بلسم (350 مل)", "brand": "كليستو", "price": 260, "image": "images/115.jpg", "alt": "بلسم 350 مل كليستو", "category": "cleaners" },
        { "name": "جل للشعر 500مل كليستو", "title": "جل للشعر (500 مل)", "brand": "كليستو", "price": 260, "image": "images/116.jpg", "alt": "جل للشعر 500مل كليستو", "category": "cleaners" },
        { "name": "شاور جل 400مل اوليفا", "title": "شاور جل (400 مل)", "brand": "اوليفا", "price": 260, "image": "images/117.jpg", "alt": "شاور جل 400مل اوليفا", "category": "cleaners" },
        { "name": "شامبو 400مل+200مل اوليفا", "title": "شامبو (400مل+200مل)", "brand": "اوليفا", "price": 380, "image": "images/118.jpg", "alt": "شامبو 400مل+200مل اوليفا", "category": "cleaners" },
        { "name": "سائل جلي 800مل نورا", "title": "سائل جلي (800 مل)", "brand": "نورا", "price": 160, "image": "images/119.jpg", "alt": "سائل جلي 800مل نورا", "category": "cleaners" },
        { "name": "بلسم 900مل", "title": "بلسم 900مل", "brand": "نورا", "price": 260, "image": "images/120.jpg", "alt": "بلسم 900مل", "category": "cleaners" },
        { "name": "شامبو 1700 مل", "title": "شامبو 1700 مل", "brand": "نورا", "price": 420, "image": "images/121.jpg", "alt": "شامبو 1700 مل", "category": "cleaners" },
        { "name": "شامبو 900مل", "title": "شامبو 900مل", "brand": "نورا", "price": 270, "image": "images/122.jpg", "alt": "شامبو 900مل", "category": "cleaners" },
        { "name": "منظف متعدد الاستعمالات ph 950 مل", "title": "منظف متعدد الاستعمالات ph 950 مل", "brand": "مور", "price": 120, "image": "images/123.jpg", "alt": "منظف متعدد الاستعمالات ph 950 مل", "category": "cleaners" },
        { "name": "منظف متعدد الاستعمالات 700مل", "title": "منظف متعدد الاستعمالات 700مل", "brand": "مور", "price": 120, "image": "images/124.jpg", "alt": "منظف متعدد الاستعمالات 700مل", "category": "cleaners" },
        { "name": "منظف حمامات 700مل", "title": "منظف حمامات 700مل", "brand": "جت", "price": 200, "image": "images/125.jpg", "alt": "منظف حمامات 700مل", "category": "cleaners" },
        { "name": "منظف مطابخ 500مل", "title": "منظف مطابخ 500مل", "brand": "جت", "price": 180, "image": "images/126.jpg", "alt": "منظف مطابخ 500مل", "category": "cleaners" },
        { "name": "ملمع زجاج 500مل", "title": "ملمع زجاج 500مل", "brand": "جت", "price": 120, "image": "images/127.jpg", "alt": "ملمع زجاج 500مل", "category": "cleaners" },
        { "name": "كريم قاشط 750مل", "title": "كريم قاشط 750مل", "brand": "جت", "price": 200, "image": "images/128.jpg", "alt": "كريم قاشط 750مل", "category": "cleaners" },
        { "name": "كريم قاشط 500 مل", "title": "كريم قاشط 500 مل", "brand": "جت", "price": 130, "image": "images/129.jpg", "alt": "كريم قاشط 500 مل", "category": "cleaners" },
        { "name": "سائل جلي 500 مل", "title": "سائل جلي 500 مل", "brand": "نورا", "price": 120, "image": "images/130.jpg", "alt": "سائل جلي 500 مل", "category": "cleaners" },
        { "name": "كلور 750 مل", "title": "كلور 750 مل", "brand": "نورا", "price": 100, "image": "images/131.jpg", "alt": "كلور 750 مل", "category": "cleaners" },
        { "name": "معجون جلي 800 مل", "title": "معجون جلي 800 مل", "brand": "مدار", "price": 200, "image": "images/132.jpg", "alt": "معجون جلي 800 مل", "category": "cleaners" },
        { "name": "معجون جلي 400 مل", "title": "معجون جلي 400 مل", "brand": "مدار", "price": 140, "image": "images/133.jpg", "alt": "معجون جلي 400 مل", "category": "cleaners" },
        { "name": "سوبر جل 900مل", "title": "سوبر جل 900مل", "brand": "جت", "price": 230, "image": "images/134.jpg", "alt": "سوبر جل 900مل", "category": "cleaners" },
        { "name": "كلور 800مل", "title": "كلور 800مل", "brand": "كانوكس", "price": 900, "image": "images/135.jpg", "alt": "كلور 800مل", "category": "cleaners" },
        { "name": "جل سوبر فلاش 750مل", "title": "جل سوبر فلاش 750مل", "brand": "مدار", "price": 180, "image": "images/136.jpg", "alt": "جل سوبر فلاش 750مل", "category": "cleaners" },
        { "name": "شاور جل 350مل", "title": "شاور جل 350مل", "brand": "كليستو", "price": 270, "image": "images/137.jpg", "alt": "شاور جل 350مل", "category": "cleaners" },
        { "name": "معقم للملابس الملونة 900مل", "title": "معقم للملابس الملونة 900مل", "brand": "كانوكس", "price": 130, "image": "images/138.jpg", "alt": "معقم للملابس الملونة 900مل", "category": "cleaners" },
        { "name": "فلاش 800مل", "title": "فلاش 800مل", "brand": "نورا", "price": 90, "image": "images/139.jpg", "alt": "فلاش 800مل", "category": "cleaners" },
        { "name": "فلاش 800مل", "title": "فلاش 800مل", "brand": "مدار", "price": 90, "image": "images/140.jpg", "alt": "فلاش 800مل", "category": "cleaners" },
        { "name": "سائل غسيل للملابس 5 لتر", "title": "سائل غسيل للملابس 5 لتر", "brand": "مدار", "price": 1150, "image": "images/141.jpg", "alt": "سائل غسيل للملابس 5 لتر", "category": "cleaners" },
        { "name": "سائل غسيل للملابس 3 لتر", "title": "سائل غسيل للملابس 3 لتر", "brand": "مدار", "price": 760, "image": "images/142.jpg", "alt": "سائل غسيل للملابس 3 لتر", "category": "cleaners" },
        { "name": "سائل غسيل 1 لتر", "title": "سائل غسيل 1 لتر", "brand": "كان", "price": 530, "image": "images/143.jpg", "alt": "سائل غسيل 1 لتر", "category": "cleaners" },
        { "name": "سائل غسيل للملابس 900 مل", "title": "سائل غسيل للملابس 900 مل", "brand": "مدار", "price": 340, "image": "images/144.jpg", "alt": "سائل غسيل للملابس 900 مل", "category": "cleaners" },
        { "name": "مسحوق غسيل الي 10 كيلو", "title": "مسحوق غسيل الي 10 كيلو", "brand": "نورا", "price": 2080, "image": "images/145.jpg", "alt": "مسحوق غسيل الي 10 كيلو", "category": "cleaners" },
        { "name": "مبيض 100 غ", "title": "مبيض 100 غ", "brand": "مدار", "price": 50, "image": "images/146.jpg", "alt": "مبيض 100 غ", "category": "cleaners" },
        { "name": "مبيض 200 غ", "title": "مبيض 200 غ", "brand": "مدار", "price": 80, "image": "images/147.jpg", "alt": "مبيض 200 غ", "category": "cleaners" },
        { "name": "سائل غسيل للملابس 1 لتر", "title": "سائل غسيل للملابس 1 لتر", "brand": "نورا", "price": 310, "image": "images/148.jpg", "alt": "سائل غسيل للملابس 1 لتر", "category": "cleaners" },
        { "name": "سحوف غسيل عادي 700غ", "title": "سحوف غسيل عادي 700غ", "brand": "نورا", "price": 180, "image": "images/149.jpg", "alt": "سحوف غسيل عادي 700غ", "category": "cleaners" },
        { "name": "مسحوق غسيل عادي 500غ", "title": "مسحوق غسيل عادي 500غ", "brand": "مدار", "price": 140, "image": "images/150.jpg", "alt": "مسحوق غسيل عادي 500غ", "category": "cleaners" },
        { "name": "مسحوق غسيل 10 كغ", "title": "مسحوق غسيل 10 كغ", "brand": "مور", "price": 1670, "image": "images/151.jpg", "alt": "مسحوق غسيل 10 كغ", "category": "cleaners" },
        { "name": "مسحوق غسيل الي 5 كغ", "title": "مسحوق غسيل الي 5 كغ", "brand": "مور", "price": 900, "image": "images/152.jpg", "alt": "مسحوق غسيل الي 5 كغ", "category": "cleaners" },
        { "name": "مسحوق غسيل الي 700غ", "title": "مسحوق غسيل الي 700غ", "brand": "مور", "price": 180, "image": "images/153.jpg", "alt": "مسحوق غسيل الي 700غ", "category": "cleaners" },
        { "name": "مسحوق غسيل الي 5 كغ", "title": "مسحوق غسيل الي 5 كغ", "brand": "نورا", "price": 1160, "image": "images/154.jpg", "alt": "مسحوق غسيل الي 5 كغ", "category": "cleaners" },
        { "name": "مسحوق غسيل الي 4 كغ", "title": "مسحوق غسيل الي 4 كغ", "brand": "نورا", "price": 880, "image": "images/155.jpg", "alt": "مسحوق غسيل الي 4 كغ", "category": "cleaners" },
        { "name": "مسحوق غسيل الي 500غ", "title": "مسحوق غسيل الي 500غ", "brand": "نورا", "price": 170, "image": "images/156.jpg", "alt": "مسحوق غسيل الي 500غ", "category": "cleaners" },
        { "name": "مسحوق غسيل الي 2 كغ", "title": "مسحوق غسيل الي 2 كغ", "brand": "نورا", "price": 470, "image": "images/157.jpg", "alt": "مسحوق غسيل الي 2 كغ", "category": "cleaners" },
        { "name": "مسحوق غسيل الي 700غ", "title": "مسحوق غسيل الي 700غ", "brand": "نورا", "price": 200, "image": "images/158.jpg", "alt": "مسحوق غسيل الي 700غ", "category": "cleaners" },
        { "name": "مسحوق غسيل الي 5 كغ", "title": "مسحوق غسيل الي 5 كغ", "brand": "كان", "price": 1360, "image": "images/159.jpg", "alt": "مسحوق غسيل الي 5 كغ", "category": "cleaners" },
        { "name": "مسحوق غسيل الي 2 كغ", "title": "مسحوق غسيل الي 2 كغ", "brand": "كان", "price": 640, "image": "images/160.jpg", "alt": "مسحوق غسيل الي 2 كغ", "category": "cleaners" },
        { "name": "مسحوق غسيل الي 400غ", "title": "مسحوق غسيل الي 400غ", "brand": "كان", "price": 160, "image": "images/161.jpg", "alt": "مسحوق غسيل الي 400غ", "category": "cleaners" },
        { "name": "مسحوق غسيل الي 7كغ+ 1 كغ", "title": "مسحوق غسيل الي 7كغ+ 1 كغ", "brand": "مدار", "price": 1880, "image": "images/162.jpg", "alt": "مسحوق غسيل الي 7كغ+ 1 كغ", "category": "cleaners" },
        { "name": "مسحوق غسيل الي 4 كغ", "title": "مسحوق غسيل الي 4 كغ", "brand": "مدار", "price": 1050, "image": "images/163.jpg", "alt": "مسحوق غسيل الي 4 كغ", "category": "cleaners" },
        { "name": "صابون سائل 5 لتر", "title": "صابون سائل 5 لتر", "brand": "برافو", "price": 1010, "image": "images/164.jpg", "alt": "صابون سائل 5 لتر", "category": "cleaners" },
        { "name": "صابون سائل 450مل", "title": "صابون سائل 450مل", "brand": "برافو", "price": 180, "image": "images/165.jpg", "alt": "صابون سائل 450مل", "category": "cleaners" },
        { "name": "صابون 120غ", "title": "صابون 120غ", "brand": "جت", "price": 80, "image": "images/166.jpg", "alt": "صابون 120غ", "category": "cleaners" },
        { "name": "صابون سائل 1500 مل", "title": "صابون سائل 1500 مل", "brand": "نورا", "price": 260, "image": "images/167.jpg", "alt": "صابون سائل 1500 مل", "category": "cleaners" },
        { "name": "صابون سائل 3600 مل", "title": "صابون سائل 3600 مل", "brand": "ماتيز", "price": 600, "image": "images/168.jpg", "alt": "صابون سائل 3600 مل", "category": "cleaners" },
        { "name": "مسحوق غسبل الي 4 كغ", "title": "مسحوق غسبل الي 4 كغ", "brand": "كان", "price": 1200, "image": "images/169.jpg", "alt": "مسحوق غسبل الي 4 كغ", "category": "cleaners" },
        { "name": "شفرات حلاقة 264", "title": "شفرات حلاقة 264", "brand": "اسكو", "price": 115, "image": "images/170.jpg", "alt": "شفرات حلاقة 264", "category": "cleaners" },
        { "name": "شفرات حلاقة 260", "title": "شفرات حلاقة 260", "brand": "اسكو", "price": 100, "image": "images/171.jpg", "alt": "شفرات حلاقة 260", "category": "cleaners" },
        { "name": "شفرات حلاقة 2382 نسائية", "title": "شفرات حلاقة 2382 نسائية", "brand": "اسكو", "price": 260, "image": "images/172.jpg", "alt": "شفرات حلاقة 2382 نسائية", "category": "cleaners" },
        { "name": "شفرت حلاقة 2333", "title": "شفرت حلاقة 2333", "brand": "اسكو", "price": 420, "image": "images/173.jpg", "alt": "شفرت حلاقة 2333", "category": "cleaners" },
        { "name": "معجون حلاقة 60ما", "title": "معجون حلاقة 60ما", "brand": "هامول", "price": 150, "image": "images/174.jpg", "alt": "معجون حلاقة 60ما", "category": "cleaners" },
        { "name": "معجون حلاقة 100 غ", "title": "معجون حلاقة 100 غ", "brand": "ديربي", "price": 140, "image": "images/175.jpg", "alt": "معجون حلاقة 100 غ", "category": "cleaners" },
        { "name": "فراشي سنان", "title": "فراشي سنان", "brand": "دكتور ويست", "price": 140, "image": "images/176.jpg", "alt": "فراشي سنان", "category": "cleaners" },
        { "name": "فراشي سنان 2على كرت", "title": "فراشي سنان 2على كرت", "brand": "كولجيت", "price": 340, "image": "images/177.jpg", "alt": "فراشي سنان 2على كرت", "category": "cleaners" },
        { "name": "معجون سنان 100مل", "title": "معجون سنان 100مل", "brand": "كولجيت", "price": 140, "image": "images/178.jpg", "alt": "معجون سنان 100مل", "category": "cleaners" },
        { "name": "جبنة دهن 200غ", "title": "جبنة دهن (200 غ)", "brand": "ابن الشام", "price": 140, "image": "images/179.jpg", "alt": "جبنة دهن 200غ ابن الشام", "category": "dairy" },
        { "name": "لبنة مدعبلة 300غ", "title": "لبنة مدعبلة (300 غ)", "brand": "نيو بارك", "price": 250, "image": "images/180.jpg", "alt": "لبنة مدعبلة 300غ نيو بارك", "category": "dairy" },
        { "name": "جبنة دهن 300غ", "title": "جبنة دهن (300 غ)", "brand": "المراعي الدمشقية", "price": 160, "image": "images/181.jpg", "alt": "جبنة دهن 300غ المراعي الدمشقية", "category": "dairy" },
        { "name": "جبنة دهن 250غ", "title": "جبنة دهن (250 غ)", "brand": "المراعي الدمشقية", "price": 140, "image": "images/182.jpg", "alt": "جبنة دهن 250غ المراعي الدمشقية", "category": "dairy" },
        { "name": "جبنة مربعات 180غ", "title": "جبنة مربعات (180 غ)", "brand": "المراعي الدمشقية", "price": 200, "image": "images/183.jpg", "alt": "جبنة مربعات 180غ المراعي الدمشقية", "category": "dairy" },
        { "name": "جبنة دهن 900غ", "title": "جبنة دهن (900 غ)", "brand": "سوبر كاو", "price": 420, "image": "images/184.jpg", "alt": "جبنة دهن 900غ سوبر كاو", "category": "dairy" },
        { "name": "لبن عيران 220 مل", "title": "لبن عيران (220 مل)", "brand": "المراعي الدمشقية", "price": 40, "image": "images/185.jpg", "alt": "لبن عيران 220 مل المراعي الدمشقية", "category": "dairy" },
        { "name": "لبن عيران 250مل", "title": "لبن عيران (250 مل)", "brand": "ابوادي", "price": 50, "image": "images/186.jpg", "alt": "لبن عيران 250مل ابوادي", "category": "dairy" },
        { "name": "جبنة مثلثات 24 قطعة", "title": "جبنة مثلثات (24 قطعة)", "brand": "المراعي الدمشقية", "price": 290, "image": "images/187.jpg", "alt": "جبنة مثلثات 24 قطعة المراعي الدمشقية", "category": "dairy" },
        { "name": "جبنة مثلثات 8 قطع", "title": "جبنة مثلثات (8 قطع)", "brand": "المراعي الدمشقية", "price": 120, "image": "images/188.jpg", "alt": "جبنة مثلثات 8 قطع المراعي الدمشقية", "category": "dairy" },
        { "name": "لبن 1 كغ", "title": "لبن (1 كغ)", "brand": "نيو بارك", "price": 150, "image": "images/189.jpg", "alt": "لبن 1 كغ نيو بارك", "category": "dairy" },
        { "name": "جبنة قشوان 275غ", "title": "جبنة قشوان (275 غ)", "brand": "نيو بارك", "price": 450, "image": "images/190.jpg", "alt": "جبنة قشوان 275غ نيو بارك", "category": "dairy" },
        { "name": "لبنة 300غ", "title": "لبنة (300 غ)", "brand": "نيو بارك", "price": 160, "image": "images/191.jpg", "alt": "لبنة 300غ نيو بارك", "category": "dairy" },
        { "name": "جبنة دهن 275غ", "title": "جبنة دهن (275 غ)", "brand": "نيو بارك", "price": 140, "image": "images/192.jpg", "alt": "جبنة دهن 275غ نيو بارك", "category": "dairy" },
        { "name": "لبنة مدعبلة بدون زيت 300غ", "title": "لبنة مدعبلة بدون زيت (300 غ)", "brand": "نيو بارك", "price": 250, "image": "images/193.jpg", "alt": "لبنة مدعبلة بدون زيت 300غ نيو بارك", "category": "dairy" },
        { "name": "جبنة قشطية 300غ", "title": "جبنة قشطية (300 غ)", "brand": "نيو بارك", "price": 260, "image": "images/194.jpg", "alt": "جبنة قشطية 300غ نيو بارك", "category": "dairy" },
        { "name": "جبنة دهن اكسترا 1 كغ", "title": "جبنة دهن اكسترا (1 كغ)", "brand": "ابن الشام", "price": 600, "image": "images/195.jpg", "alt": "جبنة دهن اكسترا 1 كغ ابن الشام", "category": "dairy" },
        { "name": "زعتر اخضر 500غ مطربان", "title": "زعتر اخضر مطربان (500 غ)", "brand": "سيدي هشام", "price": 220, "image": "images/196.jpg", "alt": "زعتر اخضر 500غ مطربان سيدي هشام", "category": "grains" },
        { "name": "مكدوس 1200 غ", "title": "مكدوس (1200 غ)", "brand": "زهرة البستان", "price": 860, "image": "images/197.jpg", "alt": "مكدوس 1200 غ زهرة البستان", "category": "canned" },
        { "name": "مكدوس 600غ", "title": "مكدوس (600 غ)", "brand": "زهرة البستان", "price": 450, "image": "images/198.jpg", "alt": "مكدوس 600غ زهرة البستان", "category": "canned" },
        { "name": "زعتر فلسطيني 500غ", "title": "زعتر فلسطيني (500 غ)", "brand": "سيدي هشام", "price": 220, "image": "images/199.jpg", "alt": "زعتر فلسطيني 500غ سيدي هشام", "category": "grains" },
        { "name": "زعتر احمر 500غ", "title": "زعتر احمر (500 غ)", "brand": "سيدي هشام", "price": 160, "image": "images/200.jpg", "alt": "زعتر احمر 500غ سيدي هشام", "category": "grains" },
        { "name": "زعتر اخضر 500 غ", "title": "زعتر اخضر (500 غ)", "brand": "سيدي هشام", "price": 160, "image": "images/201.jpg", "alt": "زعتر اخضر 500 غ سيدي هشام", "category": "grains" },
        { "name": "خبز تنور حبة الشعير 8 ارغفة", "title": "خبز تنور حبة الشعير (8 أرغفة)", "brand": "العصر", "price": 120, "image": "images/202.jpg", "alt": "خبز تنور حبة الشعير 8 ارغفة العصر", "category": "grains" },
        { "name": "خبز شوفان 8 ارغفة", "title": "خبز شوفان (8 أرغفة)", "brand": "العصر", "price": 120, "image": "images/103.jpg", "alt": "خبز شوفان 8 ارغفة العصر", "category": "grains" },
        { "name": "خبز تنور نخالة 5 ارغفة", "title": "خبز تنور نخالة (5 أرغفة)", "brand": "العصر", "price": 90, "image": "images/104.jpg", "alt": "خبز تنور نخالة 5 ارغفة العصر", "category": "grains" },
        { "name": "خبز شعير 2", "title": "خبز شعير (2)", "brand": "بيت جدي", "price": 90, "image": "images/105.jpg", "alt": "خبز شعير 2 بيت جدي", "category": "grains" },
        { "name": "خبز تنور ابيض 2", "title": "خبز تنور ابيض (2)", "brand": "بيت جدي", "price": 90, "image": "images/106.jpg", "alt": "خبز تنور ابيض 2 بيت جدي", "category": "grains" },
        { "name": "خبز تنور شوفان 2", "title": "خبز تنور شوفان (2)", "brand": "بيت جدي", "price": 90, "image": "images/107.jpg", "alt": "خبز تنور شوفان 2 بيت جدي", "category": "grains" },
        { "name": "خبز تنور نخالة 2", "title": "خبز تنور نخالة (2)", "brand": "بيت جدي", "price": 90, "image": "images/208.jpg", "alt": "خبز تنور نخالة 2 بيت جدي", "category": "grains" },
        { "name": "زعتر اخضر مطربان 500غ", "title": "زعتر اخضر مطربان (500 غ)", "brand": "سيدي هشام", "price": 220, "image": "images/209.jpg", "alt": "زعتر اخضر مطربان 500غ سيدي هشام", "category": "grains" },
        { "name": "زبدة حيواني 100غ", "title": "زبدة حيواني (100 غ)", "brand": "نيو بارك", "price": 220, "image": "images/210.jpg", "alt": "زبدة حيواني 100غ نيو بارك", "category": "dairy" },
        { "name": "طحينة 400 غ الدرة", "title": "طحينة (400 غ)", "brand": "الدرة", "price": 280, "image": "images/211.jpg", "alt": "طحينة 400 غ الدرة", "category": "dairy" },
        { "name": "طحينة 800غ البرج", "title": "طحينة (800 غ)", "brand": "البرج", "price": 550, "image": "images/212.jpg", "alt": "طحينة 800غ البرج", "category": "dairy" },
        { "name": "طحينة 400غ البرج", "title": "طحينة (400 غ)", "brand": "البرج", "price": 280, "image": "images/213.jpg", "alt": "طحينة 400غ البرج", "category": "dairy" },
        { "name": "حلاوة سادة 800غ البرج", "title": "حلاوة سادة (800 غ)", "brand": "البرج", "price": 490, "image": "images/214.jpg", "alt": "حلاوة سادة 800غ البرج", "category": "dairy" },
        { "name": "حلاوة سادة 400غ البرج", "title": "حلاوة سادة (400 غ)", "brand": "البرج", "price": 280, "image": "images/215.jpg", "alt": "حلاوة سادة 400غ البرج", "category": "dairy" },
        { "name": "حلاوة بالجوز 400غ البرج", "title": "حلاوة بالجوز (400 غ)", "brand": "البرج", "price": 320, "image": "images/216.jpg", "alt": "حلاوة بالجوز 400غ البرج", "category": "dairy" },
        { "name": "حلاوة بالفستق 800غ البرج", "title": "حلاوة بالفستق (800 غ)", "brand": "البرج", "price": 550, "image": "images/217.jpg", "alt": "حلاوة بالفستق 800غ البرج", "category": "dairy" },
        { "name": "حلاوة بالفستق 400غ البرج", "title": "حلاوة بالفستق (400 غ)", "brand": "البرج", "price": 320, "image": "images/218.jpg", "alt": "حلاوة بالفستق 400غ البرج", "category": "dairy" },
        { "name": "طحينة 400غ الغوطة", "title": "طحينة (400 غ)", "brand": "الغوطة", "price": 290, "image": "images/219.jpg", "alt": "طحينة 400غ الغوطة", "category": "dairy" },
        { "name": "حلاوة اكسترا 400غ اللقمة الدمشقية", "title": "حلاوة اكسترا (400 غ)", "brand": "اللقمة الدمشقية", "price": 340, "image": "images/220.jpg", "alt": "حلاوة اكسترا 400غ اللقمة الدمشقية", "category": "dairy" },
        { "name": "حلاوة بالفستق 400غ اللقمة الدمشقية", "title": "حلاوة بالفستق (400 غ)", "brand": "اللقمة الدمشقية", "price": 180, "image": "images/221.jpg", "alt": "حلاوة بالفستق 400غ اللقمة الدمشقية", "category": "dairy" },
        { "name": "مربى فريز 450غ زجاج زهرة البستان", "title": "مربى فريز (450 غ)", "brand": "زهرة البستان", "price": 160, "image": "images/222.jpg", "alt": "مربى فريز 450غ زجاج زهرة البستان", "category": "canned" },
        { "name": "مربى المشمش 450غ زجاج زهرة البستان", "title": "مربى المشمش (450 غ)", "brand": "زهرة البستان", "price": 200, "image": "images/223.jpg", "alt": "مربى المشمش 450غ زجاج زهرة البستان", "category": "canned" },
        { "name": "مربى الورد 1550 غ زهرة البستان", "title": "مربى الورد (1550 غ)", "brand": "زهرة البستان", "price": 500, "image": "images/224.jpg", "alt": "مربى الورد 1550 غ زهرة البستان", "category": "canned" },
        { "name": "مربى التوت 1550 غ زهرة البستان", "title": "مربى التوت (1550 غ)", "brand": "زهرة البستان", "price": 520, "image": "images/225.jpg", "alt": "مربى التوت 1550 غ زهرة البستان", "category": "canned" },
        { "name": "مربى الكرز 1550 غ زهرة البستان", "title": "مربى الكرز (1550 غ)", "brand": "زهرة البستان", "price": 400, "image": "images/226.jpg", "alt": "مربى الكرز 1550 غ زهرة البستان", "category": "canned" },
        { "name": "مربى التين 1550 غ زهرة البستان", "title": "مربى التين (1550 غ)", "brand": "زهرة البستان", "price": 500, "image": "images/227.jpg", "alt": "مربى التين 1550 غ زهرة البستان", "category": "canned" },
        { "name": "مربى الكرز 750غ زهرة البستان", "title": "مربى الكرز (750 غ)", "brand": "زهرة البستان", "price": 360, "image": "images/228.jpg", "alt": "مربى الكرز 750غ زهرة البستان", "category": "canned" },
        { "name": "مربى الكرز 500غ زهرة البستان", "title": "مربى الكرز (500 غ)", "brand": "زهرة البستان", "price": 260, "image": "images/229.jpg", "alt": "مربى الكرز 500غ زهرة البستان", "category": "canned" },
        { "name": "مربى التين 500غ زهرة البستان", "title": "مربى التين (500 غ)", "brand": "زهرة البستان", "price": 200, "image": "images/230.jpg", "alt": "مربى التين 500غ زهرة البستان", "category": "canned" },
        { "name": "مربى المشمش 500غ زهرة البستان", "title": "مربى المشمش (500 غ)", "brand": "زهرة البستان", "price": 200, "image": "images/231.jpg", "alt": "مربى المشمش 500غ زهرة البستان", "category": "canned" },
        { "name": "حليب كامل الدسم 850 مل هوى الشام", "title": "حليب كامل الدسم (850 مل)", "brand": "هوى الشام", "price": 250, "image": "images/232.jpg", "alt": "حليب كامل الدسم 850 مل هوى الشام", "category": "dairy" },
        { "name": "قشطة 170غ نيو بارك", "title": "قشطة (170 غ)", "brand": "نيو بارك", "price": 210, "image": "images/233.jpg", "alt": "قشطة 170غ نيو بارك", "category": "dairy" },
        { "name": "حليب مكثف 160غ سبرينغ", "title": "حليب مكثف (160 غ)", "brand": "سبرينغ", "price": 180, "image": "images/234.jpg", "alt": "حليب مكثف 160غ سبرينغ", "category": "dairy" },
        { "name": "قشطة قيمر 80 غ نيو بارك", "title": "قشطة قيمر (80 غ)", "brand": "نيو بارك", "price": 80, "image": "images/235.jpg", "alt": "قشطة قيمر 80 غ نيو بارك", "category": "dairy" },
        { "name": "حليب شوكولا 160مل هنا", "title": "حليب شوكولا (160 مل)", "brand": "هنا", "price": 60, "image": "images/236.jpg", "alt": "حليب شوكولا 160مل هنا", "category": "dairy" },
        { "name": "حليب خالي الدسم 850مل نيو بارك", "title": "حليب خالي الدسم (850 مل)", "brand": "نيو بارك", "price": 150, "image": "images/237.jpg", "alt": "حليب خالي الدسم 850مل نيو بارك", "category": "dairy" },
        { "name": "حليب كامل الدسم 850مل نيو بارك", "title": "حليب كامل الدسم (850 مل)", "brand": "نيو بارك", "price": 220, "image": "images/238.jpg", "alt": "حليب كامل الدسم 850مل نيو بارك", "category": "dairy" },
        { "name": "حليب كامل الدسم 275 مل هوى الشام", "title": "حليب كامل الدسم (275 مل)", "brand": "هوى الشام", "price": 70, "image": "images/239.jpg", "alt": "حليب كامل الدسم 275 مل هوى الشام", "category": "dairy" },
        { "name": "حليب موز 275 مل هوى الشام", "title": "حليب موز (275 مل)", "brand": "هوى الشام", "price": 70, "image": "images/240.jpg", "alt": "حليب موز 275 مل هوى الشام", "category": "dairy" },
        { "name": "حليب فريز 165مل هوى الشام", "title": "حليب فريز (165 مل)", "brand": "هوى الشام", "price": 50, "image": "images/241.jpg", "alt": "حليب فريز 165مل هوى الشام", "category": "dairy" },
        { "name": "حليب كامل الدسم 1 لتر هوى الشام", "title": "حليب كامل الدسم (1 لتر)", "brand": "هوى الشام", "price": 220, "image": "images/242.jpg", "alt": "حليب كامل الدسم 1 لتر هوى الشام", "category": "dairy" },
        { "name": "حليب كامل الدسم 850مل هوى الشام", "title": "حليب كامل الدسم (850 مل)", "brand": "هوى الشام", "price": 160, "image": "images/243.jpg", "alt": "حليب كامل الدسم 850مل هوى الشام", "category": "dairy" },
        { "name": "حليب بودرة 750غ جينا", "title": "حليب بودرة (750 غ)", "brand": "جينا", "price": 650, "image": "images/244.jpg", "alt": "حليب بودرة 750غ جينا", "category": "dairy" },
        { "name": "حليب بودرة 22غ جينا", "title": "حليب بودرة (22 غ)", "brand": "جينا", "price": 30, "image": "images/245.jpg", "alt": "حليب بودرة 22غ جينا", "category": "dairy" },
        { "name": "حليب بودرة غولد 350غ حليبنا", "title": "حليب بودرة غولد (350 غ)", "brand": "حليبنا", "price": 400, "image": "images/246.jpg", "alt": "حليب بودرة غولد 350غ حليبنا", "category": "dairy" },
        { "name": "حليب بودرة غولد 900غ حليبنا", "title": "حليب بودرة غولد (900 غ)", "brand": "حليبنا", "price": 800, "image": "images/247.jpg", "alt": "حليب بودرة غولد 900غ حليبنا", "category": "dairy" },
        { "name": "حليب بودرة 200غ حليبنا", "title": "حليب بودرة (200 غ)", "brand": "حليبنا", "price": 200, "image": "images/284.jpg", "alt": "حليب بودرة 200غ حليبنا", "category": "dairy" },
        { "name": "حليب بودرة 350غ حليبنا", "title": "حليب بودرة (350 غ)", "brand": "حليبنا", "price": 350, "image": "images/249.jpg", "alt": "حليب بودرة 350غ حليبنا", "category": "dairy" },
        { "name": "حليب بودرة 900غ حليبنا", "title": "حليب بودرة (900 غ)", "brand": "حليبنا", "price": 800, "image": "images/250.jpg", "alt": "حليب بودرة 900غ حليبنا", "category": "dairy" },
        { "name": "هوت دوغ بقري 500غ فيتا دورو", "title": "هوت دوغ بقري (500 غ)", "brand": "فيتا دورو", "price": 340, "image": "images/251.jpg", "alt": "هوت دوغ بقري 500غ فيتا دورو", "category": "canned" },
        { "name": "زبدة نباتي 200غ المراعي الدمشقية", "title": "زبدة نباتي (200 غ)", "brand": "المراعي الدمشقية", "price": 90, "image": "images/252.jpg", "alt": "زبدة نباتي 200غ المراعي الدمشقية", "category": "dairy" },
        { "name": "روستو بقري مدخن فيتا دورو", "title": "روستو بقري مدخن", "brand": "فيتا دورو", "price": 340, "image": "images/253.jpg", "alt": "روستو بقري مدخن فيتا دورو", "category": "canned" },
        { "name": "مرتاديلا دجاج 200غ بافاريا", "title": "مرتاديلا دجاج (200 غ)", "brand": "بافاريا", "price": 120, "image": "images/254.jpg", "alt": "مرتاديلا دجاج 200غ بافاريا", "category": "canned" },
        { "name": "هوت دوغ دجاج 250غ بافاريا", "title": "هوت دوغ دجاج (250 غ)", "brand": "بافاريا", "price": 170, "image": "images/255.jpg", "alt": "هوت دوغ دجاج 250غ بافاريا", "category": "canned" },
        { "name": "مرتاديلا دجاج 150غ بافاريا", "title": "مرتاديلا دجاج (150 غ)", "brand": "بافاريا", "price": 140, "image": "images/256.jpg", "alt": "مرتاديلا دجاج 150غ بافاريا", "category": "canned" },
        { "name": "سلامي بقري مدخن 150غ بافاريا", "title": "سلامي بقري مدخن (150 غ)", "brand": "بافاريا", "price": 300, "image": "images/257.jpg", "alt": "سلامي بقري مدخن 150غ بافاريا", "category": "canned" },
        { "name": "روستو دجاج مدخن 150غ بافاريا", "title": "روستو دجاج مدخن (150 غ)", "brand": "بافاريا", "price": 230, "image": "images/258.jpg", "alt": "روستو دجاج مدخن 150غ بافاريا", "category": "canned" },
        { "name": "هوت دوغ دجاج 250غ فيتا دورو", "title": "هوت دوغ دجاج (250 غ)", "brand": "فيتا دورو", "price": 180, "image": "images/259.jpg", "alt": "هوت دوغ دجاج 250غ فيتا دورو", "category": "canned" },
        { "name": "بيبيروني شرائح 150غ فيتا دورو", "title": "بيبيروني شرائح (150 غ)", "brand": "فيتا دورو", "price": 350, "image": "images/260.jpg", "alt": "بيبيروني شرائح 150غ فيتا دورو", "category": "canned" },
        { "name": "شوكولا 350غ زجاج نيوتيلا", "title": "شوكولا (350 غ)", "brand": "نيوتيلا", "price": 580, "image": "images/261.jpg", "alt": "شوكولا 350غ زجاج نيوتيلا", "category": "canned" },
        { "name": "عصارة صوص شوكولا 275 غ رويال", "title": "عصارة صوص شوكولا (275 غ)", "brand": "رويال", "price": 260, "image": "images/262.jpg", "alt": "عصارة صوص شوكولا 275 غ رويال", "category": "canned" },
        { "name": "شوكولا شوكو ديبس 275غ نيو بارك", "title": "شوكولا شوكو ديبس (275 غ)", "brand": "نيو بارك", "price": 200, "image": "images/263.jpg", "alt": "شوكولا شوكو ديبس 275غ نيو بارك", "category": "canned" },
        { "name": "شوكولا سائلة 350غ هوى الشام", "title": "شوكولا سائلة (350 غ)", "brand": "هوى الشام", "price": 310, "image": "images/264.jpg", "alt": "شوكولا سائلة 350غ هوى الشام", "category": "canned" },
        { "name": "شوكولا بندق 600غ نيو بارك", "title": "شوكولا بندق (600 غ)", "brand": "نيو بارك", "price": 450, "image": "images/265.jpg", "alt": "شوكولا بندق 600غ نيو بارك", "category": "canned" },
        { "name": "شوكولا بندق 300غ نيو بارك", "title": "شوكولا بندق (300 غ)", "brand": "نيو بارك", "price": 260, "image": "images/266.jpg", "alt": "شوكولا بندق 300غ نيو بارك", "category": "canned" },
        { "name": "زبدة الفول السوداني 300غ هوى الشام", "title": "زبدة الفول السوداني (300 غ)", "brand": "هوى الشام", "price": 290, "image": "images/267.jpg", "alt": "زبدة الفول السوداني 300غ هوى الشام", "category": "canned" },
        { "name": "زبدة اللوتس 300غ هوى الشام", "title": "زبدة اللوتس (300 غ)", "brand": "هوى الشام", "price": 270, "image": "images/268.jpg", "alt": "زبدة اللوتس 300غ هوى الشام", "category": "canned" },
        { "name": "كريمة لوتس 350غ أيام زمان", "title": "كريمة لوتس (350 غ)", "brand": "أيام زمان", "price": 280, "image": "images/269.jpg", "alt": "كريمة لوتس 350غ أيام زمان", "category": "dairy" },
        { "name": "كريمة لوتس 700غ أيام زمان", "title": "كريمة لوتس (700 غ)", "brand": "أيام زمان", "price": 460, "image": "images/270.jpg", "alt": "كريمة لوتس 700غ أيام زمان", "category": "dairy" },
        { "name": "مخلل لفت 710 غ الدرة", "title": "مخلل لفت (710 غ)", "brand": "الدرة", "price": 180, "image": "images/271.jpg", "alt": "مخلل لفت 710 غ الدرة", "category": "canned" },
        { "name": "مخلل فليفلة 1000 غ الدرة", "title": "مخلل فليفلة (1000 غ)", "brand": "الدرة", "price": 290, "image": "images/272.jpg", "alt": "مخلل فليفلة 1000 غ الدرة", "category": "canned" },
        { "name": "مخلل خيار 1300 غ الدرة", "title": "مخلل خيار (1300 غ)", "brand": "الدرة", "price": 420, "image": "images/273.jpg", "alt": "مخلل خيار 1300 غ الدرة", "category": "canned" },
        { "name": "مخلل خيار 710 غ الدرة", "title": "مخلل خيار (710 غ)", "brand": "الدرة", "price": 250, "image": "images/274.jpg", "alt": "مخلل خيار 710 غ الدرة", "category": "canned" },
        { "name": "مخلل مشكل 1300 غ الدرة", "title": "مخلل مشكل (1300 غ)", "brand": "الدرة", "price": 280, "image": "images/275.jpg", "alt": "مخلل مشكل 1300 غ الدرة", "category": "canned" },
        { "name": "مخلل مشكل 710 غ الدرة", "title": "مخلل مشكل (710 غ)", "brand": "الدرة", "price": 180, "image": "images/276.jpg", "alt": "مخلل مشكل 710 غ الدرة", "category": "canned" },
        { "name": "ناغيت دجاج 500 غ ايفوريا", "title": "ناغيت دجاج (500 غ)", "brand": "ايفوريا", "price": 500, "image": "images/277.jpg", "alt": "ناغيت دجاج 500 غ ايفوريا", "category": "meat" },
        { "name": "كرسبي دجاج 500 غ ايفوريا", "title": "كرسبي دجاج (500 غ)", "brand": "ايفوريا", "price": 580, "image": "images/278.jpg", "alt": "كرسبي دجاج 500 غ ايفوريا", "category": "meat" },
        { "name": "سبرينغ فود 20 قطعة سمارت فود", "title": "سبرينغ فود (20 قطعة)", "brand": "سمارت فود", "price": 300, "image": "images/279.jpg", "alt": "سبرينغ فود 20 قطعة سمارت فود", "category": "meat" },
        { "name": "كبة لبنية 20 قطعة سبرينغ", "title": "كبة لبنية (20 قطعة)", "brand": "سبرينغ", "price": 760, "image": "images/280.jpg", "alt": "كبة لبنية 20 قطعة سبرينغ", "category": "meat" },
        { "name": "كبة مقلية 12 قطعة سبرينغ", "title": "كبة مقلية (12 قطعة)", "brand": "سبرينغ", "price": 780, "image": "images/281.jpg", "alt": "كبة مقلية 12 قطعة سبرينغ", "category": "meat" },
        { "name": "شيش برك 30 قطعة سبرينغ", "title": "شيش برك (30 قطعة)", "brand": "سبرينغ", "price": 780, "image": "images/282.jpg", "alt": "شيش برك 30 قطعة سبرينغ", "category": "meat" },
        { "name": "برك جبنة كيري 16 قطعة سبرينغ", "title": "برك جبنة كيري (16 قطعة)", "brand": "سبرينغ", "price": 630, "image": "images/283.jpg", "alt": "برك جبنة كيري 16 قطعة سبرينغ", "category": "meat" },
        { "name": "برك لحمة 16 قطعة سبرينغ", "title": "برك لحمة (16 قطعة)", "brand": "سبرينغ", "price": 780, "image": "images/401.jpg", "alt": "برك لحمة 16 قطعة سبرينغ", "category": "meat" },
        { "name": "صوص صويا 160 غ ديلي فود", "title": "صوص صويا (160 غ)", "brand": "ديلي فود", "price": 100, "image": "images/285.jpg", "alt": "صوص صويا 160 غ ديلي فود", "category": "canned" },
        { "name": "صوص هاني ماسترد 380 غ الدرة", "title": "صوص هاني ماسترد (380 غ)", "brand": "الدرة", "price": 340, "image": "images/286.jpg", "alt": "صوص هاني ماسترد 380 غ الدرة", "category": "canned" },
        { "name": "صوص النودلز 370 غ هاوس", "title": "صوص النودلز (370 غ)", "brand": "هاوس", "price": 220, "image": "images/287.jpg", "alt": "صوص النودلز 370 غ هاوس", "category": "canned" },
        { "name": "صوص بيج ماك 370 غ هاوس", "title": "صوص بيج ماك (370 غ)", "brand": "هاوس", "price": 220, "image": "images/288.jpg", "alt": "صوص بيج ماك 370 غ هاوس", "category": "canned" },
        { "name": "شطة حارة 95 غ ديلي فود", "title": "شطة حارة (95 غ)", "brand": "ديلي فود", "price": 100, "image": "images/289.jpg", "alt": "شطة حارة 95 غ ديلي فود", "category": "canned" },
        { "name": "صلصة شيدر 430 غ سوسيرى", "title": "صلصة شيدر (430 غ)", "brand": "سوسيرى", "price": 240, "image": "images/290.jpg", "alt": "صلصة شيدر 430 غ سوسيرى", "category": "canned" },
        { "name": "صوص صويا 420 غ هاوس", "title": "صوص صويا (420 غ)", "brand": "هاوس", "price": 220, "image": "images/291.jpg", "alt": "صوص صويا 420 غ هاوس", "category": "canned" },
        { "name": "خلطة بشاميل 200 غ الدرة", "title": "خلطة بشاميل (200 غ)", "brand": "الدرة", "price": 150, "image": "images/292.jpg", "alt": "خلطة بشاميل 200 غ الدرة", "category": "grains" },
        { "name": "خردل مع العسل 350 مل ديلي فود", "title": "خردل مع العسل (350 مل)", "brand": "ديلي فود", "price": 200, "image": "images/293.jpg", "alt": "خردل مع العسل 350 مل ديلي فود", "category": "canned" },
        { "name": "مايونيز مطربان 270 غ سوسيرى", "title": "مايونيز مطربان (270 غ)", "brand": "سوسيرى", "price": 180, "image": "images/294.jpg", "alt": "مايونيز مطربان 270 غ سوسيرى", "category": "canned" },
        { "name": "صلصة خردل بالعسل 380 غ سوسيرى", "title": "صلصة خردل بالعسل (380 غ)", "brand": "سوسيرى", "price": 240, "image": "images/295.jpg", "alt": "صلصة خردل بالعسل 380 غ سوسيرى", "category": "canned" },
        { "name": "صلصة باربكيو 420 غ الغوطة", "title": "صلصة باربكيو (420 غ)", "brand": "الغوطة", "price": 180, "image": "images/296.jpg", "alt": "صلصة باربكيو 420 غ الغوطة", "category": "canned" },
        { "name": "مايونيز 700 غ ديلي فود", "title": "مايونيز (700 غ)", "brand": "ديلي فود", "price": 400, "image": "images/297.jpg", "alt": "مايونيز 700 غ ديلي فود", "category": "canned" },
        { "name": "هوت صوص 400 غ ديلي فود", "title": "هوت صوص (400 غ)", "brand": "ديلي فود", "price": 160, "image": "images/298.jpg", "alt": "هوت صوص 400 غ ديلي فود", "category": "canned" },
        { "name": "كتشب حار 900 غ دوليز", "title": "كتشب حار (900 غ)", "brand": "دوليز", "price": 360, "image": "images/299.jpg", "alt": "كتشب حار 900 غ دوليز", "category": "canned" },
        { "name": "كتشب حار 250 غ دوليز", "title": "كتشب حار (250 غ)", "brand": "دوليز", "price": 180, "image": "images/300.jpg", "alt": "كتشب حار 250 غ دوليز", "category": "canned" },
        { "name": "كتشب حلو 450 غ دوليز", "title": "كتشب حلو (450 غ)", "brand": "دوليز", "price": 240, "image": "images/301.jpg", "alt": "كتشب حلو 450 غ دوليز", "category": "canned" },
        { "name": "كتشب حار 450 غ دوليز", "title": "كتشب حار (450 غ)", "brand": "دوليز", "price": 240, "image": "images/302.jpg", "alt": "كتشب حار 450 غ دوليز", "category": "canned" },
        { "name": "شطة 750 مل اصالة", "title": "شطة (750 مل)", "brand": "اصالة", "price": 220, "image": "images/303.jpg", "alt": "شطة 750 مل اصالة", "category": "canned" },
        { "name": "صلصة البلسميك 435 غ سوسيرى", "title": "صلصة البلسميك (435 غ)", "brand": "سوسيرى", "price": 200, "image": "images/304.jpg", "alt": "صلصة البلسميك 435 غ سوسيرى", "category": "canned" },
        { "name": "مايوتشب 400 غ سوسيرى", "title": "مايوتشب (400 غ)", "brand": "سوسيرى", "price": 240, "image": "images/305.jpg", "alt": "مايوتشب 400 غ سوسيرى", "category": "canned" },
        { "name": "مايونيز قليل الدسم 400 غ سوسيرى", "title": "مايونيز قليل الدسم (400 غ)", "brand": "سوسيرى", "price": 230, "image": "images/306.jpg", "alt": "مايونيز قليل الدسم 400 غ سوسيرى", "category": "canned" },
        { "name": "مايونيز 390 غ سوسيرى", "title": "مايونيز (390 غ)", "brand": "سوسيرى", "price": 240, "image": "images/307.jpg", "alt": "مايونيز 390 غ سوسيرى", "category": "canned" },
        { "name": "كتشب حار 400 غ الغوطة", "title": "كتشب حار (400 غ)", "brand": "الغوطة", "price": 160, "image": "images/308.jpg", "alt": "كتشب حار 400 غ الغوطة", "category": "canned" },
        { "name": "كتشب 450 غ الدرة", "title": "كتشب (450 غ)", "brand": "الدرة", "price": 180, "image": "images/309.jpg", "alt": "كتشب 450 غ الدرة", "category": "canned" },
        { "name": "معجون طماطم زجاج 3100 غ الدرة", "title": "معجون طماطم زجاج (3100 غ)", "brand": "الدرة", "price": 800, "image": "images/310.jpg", "alt": "معجون طماطم زجاج 3100 غ الدرة", "category": "canned" },
        { "name": "معجون طماطم 660 غ سيدي هشام", "title": "معجون طماطم (660 غ)", "brand": "سيدي هشام", "price": 210, "image": "images/311.jpg", "alt": "معجون طماطم 660 غ سيدي هشام", "category": "canned" },
        { "name": "معجون طماطم 1350 غ سيدي هشام", "title": "معجون طماطم (1350 غ)", "brand": "سيدي هشام", "price": 360, "image": "images/312.jpg", "alt": "معجون طماطم 1350 غ سيدي هشام", "category": "canned" },
        { "name": "دبس رمان 420 غ دوليز", "title": "دبس رمان (420 غ)", "brand": "دوليز", "price": 250, "image": "images/313.jpg", "alt": "دبس رمان 420 غ دوليز", "category": "grains" },
        { "name": "حامض الليمون 1 لتر تنورين", "title": "حامض الليمون (1 لتر)", "brand": "تنورين", "price": 140, "image": "images/314.jpg", "alt": "حامض الليمون 1 لتر تنورين", "category": "grains" },
        { "name": "دبس رمان 1 لتر توليدو", "title": "دبس رمان (1 لتر)", "brand": "توليدو", "price": 340, "image": "images/315.jpg", "alt": "دبس رمان 1 لتر توليدو", "category": "grains" },
        { "name": "دبس رمان زجاج 350 غ توليدو", "title": "دبس رمان زجاج (350 غ)", "brand": "توليدو", "price": 160, "image": "images/316.jpg", "alt": "دبس رمان زجاج 350 غ توليدو", "category": "grains" },
        { "name": "روح الخل 90 مل ديلارا", "title": "روح الخل (90 مل)", "brand": "ديلارا", "price": 80, "image": "images/317.jpg", "alt": "روح الخل 90 مل ديلارا", "category": "grains" },
        { "name": "خل تفاح 500 مل سيدي هشام", "title": "خل تفاح (500 مل)", "brand": "سيدي هشام", "price": 130, "image": "images/318.jpg", "alt": "خل تفاح 500 مل سيدي هشام", "category": "grains" },
        { "name": "خل ابيض 500 مل سيدي هشام", "title": "خل ابيض (500 مل)", "brand": "سيدي هشام", "price": 130, "image": "images/319.jpg", "alt": "خل ابيض 500 مل سيدي هشام", "category": "grains" },
        { "name": "دبس رمان 350 غ سيدي هشام", "title": "دبس رمان (350 غ)", "brand": "سيدي هشام", "price": 160, "image": "images/320.jpg", "alt": "دبس رمان 350 غ سيدي هشام", "category": "grains" },
        { "name": "زيت الذرة 1 لتر سلمى", "title": "زيت الذرة (1 لتر)", "brand": "سلمى", "price": 300, "image": "images/321.jpg", "alt": "زيت الذرة 1 لتر سلمى", "category": "grains" },
        { "name": "سمن نباتي 2 كغ البسكليت", "title": "سمن نباتي (2 كغ)", "brand": "البسكليت", "price": 720, "image": "images/322.jpg", "alt": "سمن نباتي 2 كغ البسكليت", "category": "grains" },
        { "name": "زيت دوار الشمس 1 لتر الدرة", "title": "زيت دوار الشمس (1 لتر)", "brand": "الدرة", "price": 320, "image": "images/323.jpg", "alt": "زيت دوار الشمس 1 لتر الدرة", "category": "grains" },
        { "name": "سمن نباتي 2 كغ الخير", "title": "سمن نباتي (2 كغ)", "brand": "الخير", "price": 820, "image": "images/324.jpg", "alt": "سمن نباتي 2 كغ الخير", "category": "grains" },
        { "name": "سمن نباتي 1 كغ سيدي هشام", "title": "سمن نباتي (1 كغ)", "brand": "سيدي هشام", "price": 420, "image": "images/325.jpg", "alt": "سمن نباتي 1 كغ سيدي هشام", "category": "grains" },
        { "name": "سمن نباتي 1 كغ الخير", "title": "سمن نباتي (1 كغ)", "brand": "الخير", "price": 420, "image": "images/326.jpg", "alt": "سمن نباتي 1 كغ الخير", "category": "grains" },
        { "name": "سمن غنم 1 كغ نيو بارك", "title": "سمن غنم (1 كغ)", "brand": "نيو بارك", "price": 1630, "image": "images/327.jpg", "alt": "سمن غنم 1 كغ نيو بارك", "category": "grains" },
        { "name": "سمن بقري 1 كغ نيو بارك", "title": "سمن بقري (1 كغ)", "brand": "نيو بارك", "price": 1510, "image": "images/328.jpg", "alt": "سمن بقري 1 كغ نيو بارك", "category": "grains" },
        { "name": "سمن بقري 500 غ نيو بارك", "title": "سمن بقري (500 غ)", "brand": "نيو بارك", "price": 2400, "image": "images/329.jpg", "alt": "سمن بقري 500 غ نيو بارك", "category": "grains" },
        { "name": "زيت دوار الشمس 1 لتر سيدي هشام", "title": "زيت دوار الشمس (1 لتر)", "brand": "سيدي هشام", "price": 330, "image": "images/330.jpg", "alt": "زيت دوار الشمس 1 لتر سيدي هشام", "category": "grains" },
        { "name": "زيت زيتون 5 لتر سيدي هشام", "title": "زيت زيتون (5 لتر)", "brand": "سيدي هشام", "price": 4200, "image": "images/331.jpg", "alt": "زيت زيتون 5 لتر سيدي هشام", "category": "grains" },
        { "name": "زيت زيتون 2 لتر سيدي هشام", "title": "زيت زيتون (2 لتر)", "brand": "سيدي هشام", "price": 1700, "image": "images/332.jpg", "alt": "زيت زيتون 2 لتر سيدي هشام", "category": "grains" },
        { "name": "زيت زيتون 1 لتر سيدي هشام", "title": "زيت زيتون (1 لتر)", "brand": "سيدي هشام", "price": 870, "image": "images/333.jpg", "alt": "زيت زيتون 1 لتر سيدي هشام", "category": "grains" },
        { "name": "زيت زيتون 500 مل سيدي هشام", "title": "زيت زيتون (500 مل)", "brand": "سيدي هشام", "price": 460, "image": "images/334.jpg", "alt": "زيت زيتون 500 مل سيدي هشام", "category": "grains" },
        { "name": "سمن غنم 1 كغ سيدي هشام", "title": "سمن غنم (1 كغ)", "brand": "سيدي هشام", "price": 1720, "image": "images/335.jpg", "alt": "سمن غنم 1 كغ سيدي هشام", "category": "grains" },
        { "name": "سمن غنم 500 غ سيدي هشام", "title": "سمن غنم (500 غ)", "brand": "سيدي هشام", "price": 900, "image": "images/336.jpg", "alt": "سمن غنم 500 غ سيدي هشام", "category": "grains" },
        { "name": "سمن بقري 500 غ سيدي هشام", "title": "سمن بقري (500 غ)", "brand": "سيدي هشام", "price": 750, "image": "images/337.jpg", "alt": "سمن بقري 500 غ سيدي هشام", "category": "grains" },
        { "name": "سمن بقري 1 كغ سيدي هشام", "title": "سمن بقري (1 كغ)", "brand": "سيدي هشام", "price": 1410, "image": "images/338.jpg", "alt": "سمن بقري 1 كغ سيدي هشام", "category": "grains" },
        { "name": "زيت زيتون 1 لتر الريف", "title": "زيت زيتون (1 لتر)", "brand": "الريف", "price": 860, "image": "images/339.jpg", "alt": "زيت زيتون 1 لتر الريف", "category": "grains" },
        { "name": "زيت زيتون 500 مل الريف", "title": "زيت زيتون (500 مل)", "brand": "الريف", "price": 500, "image": "images/340.jpg", "alt": "زيت زيتون 500 مل الريف", "category": "grains" },
        { "name": "زيت دوار الشمس 4 لتر الريف", "title": "زيت دوار الشمس (4 لتر)", "brand": "الريف", "price": 1210, "image": "images/341.jpg", "alt": "زيت دوار الشمس 4 لتر الريف", "category": "grains" },
        { "name": "سمن نباتي 2 كغ الريف", "title": "سمن نباتي (2 كغ)", "brand": "الريف", "price": 720, "image": "images/342.jpg", "alt": "سمن نباتي 2 كغ الريف", "category": "grains" },
        { "name": "زيت دوار الشمس 1 لتر الريف", "title": "زيت دوار الشمس (1 لتر)", "brand": "الريف", "price": 320, "image": "images/343.jpg", "alt": "زيت دوار الشمس 1 لتر الريف", "category": "grains" },
        { "name": "ملح 125 غ سولو", "title": "ملح (125 غ)", "brand": "سولو", "price": 50, "image": "images/344.jpg", "alt": "ملح 125 غ سولو", "category": "grains" },
        { "name": "خلطة فلافل 350 غ سولو", "title": "خلطة فلافل (350 غ)", "brand": "سولو", "price": 260, "image": "images/345.jpg", "alt": "خلطة فلافل 350 غ سولو", "category": "grains" },
        { "name": "ملح صيني خشن 20 غ سولو", "title": "ملح صيني خشن (20 غ)", "brand": "سولو", "price": 40, "image": "images/346.jpg", "alt": "ملح صيني خشن 20 غ سولو", "category": "grains" },
        { "name": "بابريكا 26 غ سولو", "title": "بابريكا (26 غ)", "brand": "سولو", "price": 50, "image": "images/347.jpg", "alt": "بابريكا 26 غ سولو", "category": "grains" },
        { "name": "فلفل ابيض ناعم 11 غ سولو", "title": "فلفل ابيض ناعم (11 غ)", "brand": "سولو", "price": 80, "image": "images/348.jpg", "alt": "فلفل ابيض ناعم 11 غ سولو", "category": "grains" },
        { "name": "كبش قرنفل 6 غ سولو", "title": "كبش قرنفل (6 غ)", "brand": "سولو", "price": 50, "image": "images/349.jpg", "alt": "كبش قرنفل 6 غ سولو", "category": "grains" },
        { "name": "عصفر 5 غ سولو", "title": "عصفر (5 غ)", "brand": "سولو", "price": 60, "image": "images/350.jpg", "alt": "عصفر 5 غ سولو", "category": "grains" },
        { "name": "زنجبيل ناعم 21 غ سولو", "title": "زنجبيل ناعم (21 غ)", "brand": "سولو", "price": 50, "image": "images/351.jpg", "alt": "زنجبيل ناعم 21 غ سولو", "category": "grains" },
        { "name": "بهارات مشكلة 20 غ سولو", "title": "بهارات مشكلة (20 غ)", "brand": "سولو", "price": 50, "image": "images/352.jpg", "alt": "بهارات مشكلة 20 غ سولو", "category": "grains" },
        { "name": "فلفل اسود ناعم 16 غ سولو", "title": "فلفل اسود ناعم (16 غ)", "brand": "سولو", "price": 50, "image": "images/353.jpg", "alt": "فلفل اسود ناعم 16 غ سولو", "category": "grains" },
        { "name": "فليفلة حلوة ناعمة 21 غ سولو", "title": "فليفلة حلوة ناعمة (21 غ)", "brand": "سولو", "price": 50, "image": "images/354.jpg", "alt": "فليفلة حلوة ناعمة 21 غ سولو", "category": "grains" },
        { "name": "جوز 26 غ سولو", "title": "جوز (26 غ)", "brand": "سولو", "price": 90, "image": "images/355.jpg", "alt": "جوز 26 غ سولو", "category": "grains" },
        { "name": "جوزة الطيب حب 16 غ سولو", "title": "جوزة الطيب حب (16 غ)", "brand": "سولو", "price": 50, "image": "images/356.jpg", "alt": "جوزة الطيب حب 16 غ سولو", "category": "grains" },
        { "name": "كزبرة ناعمة 25 غ سولو", "title": "كزبرة ناعمة (25 غ)", "brand": "سولو", "price": 30, "image": "images/357.jpg", "alt": "كزبرة ناعمة 25 غ سولو", "category": "grains" },
        { "name": "لومي حب 15 غ سولو", "title": "لومي حب (15 غ)", "brand": "سولو", "price": 40, "image": "images/358.jpg", "alt": "لومي حب 15 غ سولو", "category": "grains" },
        { "name": "قرفة عيدان 16 غ سولو", "title": "قرفة عيدان (16 غ)", "brand": "سولو", "price": 40, "image": "images/359.jpg", "alt": "قرفة عيدان 16 غ سولو", "category": "grains" },
        { "name": "ورق غار 10 غ سولو", "title": "ورق غار (10 غ)", "brand": "سولو", "price": 30, "image": "images/360.jpg", "alt": "ورق غار 10 غ سولو", "category": "grains" },
        { "name": "كمون حب 20 غ سولو", "title": "كمون حب (20 غ)", "brand": "سولو", "price": 50, "image": "images/361.jpg", "alt": "كمون حب 20 غ سولو", "category": "grains" },
        { "name": "كمون ناعم 20 غ سولو", "title": "كمون ناعم (20 غ)", "brand": "سولو", "price": 50, "image": "images/362.jpg", "alt": "كمون ناعم 20 غ سولو", "category": "grains" },
        { "name": "حبة البركة 21 غ سولو", "title": "حبة البركة (21 غ)", "brand": "سولو", "price": 40, "image": "images/363.jpg", "alt": "حبة البركة 21 غ سولو", "category": "grains" },
        { "name": "جوز الهند 26 غ سولو", "title": "جوز الهند (26 غ)", "brand": "سولو", "price": 50, "image": "images/364.jpg", "alt": "جوز الهند 26 غ سولو", "category": "grains" },
        { "name": "حمض الليمون 35 غ سولو", "title": "حمض الليمون (35 غ)", "brand": "سولو", "price": 30, "image": "images/365.jpg", "alt": "حمض الليمون 35 غ سولو", "category": "grains" },
        { "name": "قلي 36 غ سولو", "title": "قلي (36 غ)", "brand": "سولو", "price": 30, "image": "images/366.jpg", "alt": "قلي 36 غ سولو", "category": "grains" },
        { "name": "نعنع 16 غ سولو", "title": "نعنع (16 غ)", "brand": "سولو", "price": 30, "image": "images/367.jpg", "alt": "نعنع 16 غ سولو", "category": "grains" },
        { "name": "شوفان كرتون 450 غ سولو", "title": "شوفان كرتون (450 غ)", "brand": "سولو", "price": 250, "image": "images/368.jpg", "alt": "شوفان كرتون 450 غ سولو", "category": "grains" },
        { "name": "كاري 50 غ سولو", "title": "كاري (50 غ)", "brand": "سولو", "price": 10, "image": "images/369.jpg", "alt": "كاري 50 غ سولو", "category": "grains" },
        { "name": "هيل ناعم 50 غ سولو", "title": "هيل ناعم (50 غ)", "brand": "سولو", "price": 310, "image": "images/370.jpg", "alt": "هيل ناعم 50 غ سولو", "category": "grains" },
        { "name": "اوريغانو 30 غ سولو", "title": "اوريغانو (30 غ)", "brand": "سولو", "price": 80, "image": "images/371.jpg", "alt": "اوريغانو 30 غ سولو", "category": "grains" },
        { "name": "بصل ناعم 50 غ سولو", "title": "بصل ناعم (50 غ)", "brand": "سولو", "price": 10, "image": "images/372.jpg", "alt": "بصل ناعم 50 غ سولو", "category": "grains" },
        { "name": "بهارات مشكلة 50 غ سولو", "title": "بهارات مشكلة (50 غ)", "brand": "سولو", "price": 130, "image": "images/373.jpg", "alt": "بهارات مشكلة 50 غ سولو", "category": "grains" },
        { "name": "سماق ناعم 50 غ سولو", "title": "سماق ناعم (50 غ)", "brand": "سولو", "price": 120, "image": "images/374.jpg", "alt": "سماق ناعم 50 غ سولو", "category": "grains" },
        { "name": "فلفل اسود 50 غ سولو", "title": "فلفل اسود (50 غ)", "brand": "سولو", "price": 140, "image": "images/375.jpg", "alt": "فلفل اسود 50 غ سولو", "category": "grains" },
        { "name": "فليفلة حارة 50 غ سولو", "title": "فليفلة حارة (50 غ)", "brand": "سولو", "price": 120, "image": "images/376.jpg", "alt": "فليفلة حارة 50 غ سولو", "category": "grains" },
        { "name": "قرفة ناعمة 50 غ سولو", "title": "قرفة ناعمة (50 غ)", "brand": "سولو", "price": 100, "image": "images/377.jpg", "alt": "قرفة ناعمة 50 غ سولو", "category": "grains" },
        { "name": "كركم ناعم 50 غ سولو", "title": "كركم ناعم (50 غ)", "brand": "سولو", "price": 80, "image": "images/378.jpg", "alt": "كركم ناعم 50 غ سولو", "category": "grains" },
        { "name": "ثوم ناعم 50 غ سولو", "title": "ثوم ناعم (50 غ)", "brand": "سولو", "price": 10, "image": "images/379.jpg", "alt": "ثوم ناعم 50 غ سولو", "category": "grains" },
        { "name": "فليفلة حلوة 50 غ سولو", "title": "فليفلة حلوة (50 غ)", "brand": "سولو", "price": 90, "image": "images/380.jpg", "alt": "فليفلة حلوة 50 غ سولو", "category": "grains" },
        { "name": "كزبرة ناعمة 50 غ سولو", "title": "كزبرة ناعمة (50 غ)", "brand": "سولو", "price": 70, "image": "images/381.jpg", "alt": "كزبرة ناعمة 50 غ سولو", "category": "grains" },
        { "name": "ورق غار ناعم 50 غ سولو", "title": "ورق غار ناعم (50 غ)", "brand": "سولو", "price": 70, "image": "images/382.jpg", "alt": "ورق غار ناعم 50 غ سولو", "category": "grains" },
        { "name": "كمون ناعم 50 غ سولو", "title": "كمون ناعم (50 غ)", "brand": "سولو", "price": 100, "image": "images/383.jpg", "alt": "كمون ناعم 50 غ سولو", "category": "grains" },
        { "name": "حمض الليمون 50 غ سولو", "title": "حمض الليمون (50 غ)", "brand": "سولو", "price": 100, "image": "images/384.jpg", "alt": "حمض الليمون 50 غ سولو", "category": "grains" },
        { "name": "نعنع 30 غ سولو", "title": "نعنع (30 غ)", "brand": "سولو", "price": 60, "image": "images/385.jpg", "alt": "نعنع 30 غ سولو", "category": "grains" },
        { "name": "نشاء الذرة 400 غ الغوطة", "title": "نشاء الذرة (400 غ)", "brand": "الغوطة", "price": 140, "image": "images/386.jpg", "alt": "نشاء الذرة 400 غ الغوطة", "category": "grains" },
        { "name": "كعك مجروش للقلي 200 غ سولو", "title": "كعك مجروش للقلي (200 غ)", "brand": "سولو", "price": 100, "image": "images/387.jpg", "alt": "كعك مجروش للقلي 200 غ سولو", "category": "grains" },
        { "name": "خليط البشاميل 160 غ نيو بارك", "title": "خليط البشاميل (160 غ)", "brand": "نيو بارك", "price": 100, "image": "images/388.jpg", "alt": "خليط البشاميل 160 غ نيو بارك", "category": "grains" },
        { "name": "كريمة طبخ حيواني 160 مل نيو بارك", "title": "كريمة طبخ حيواني (160 مل)", "brand": "نيو بارك", "price": 120, "image": "images/389.jpg", "alt": "كريمة طبخ حيواني 160 مل نيو بارك", "category": "dairy" },
        { "name": "خليط البشاميل 800 غ نيو بارك", "title": "خليط البشاميل (800 غ)", "brand": "نيو بارك", "price": 230, "image": "images/390.jpg", "alt": "خليط البشاميل 800 غ نيو بارك", "category": "grains" },
        { "name": "كريمة طبخ حيواني 800 غ نيو بارك", "title": "كريمة طبخ حيواني (800 غ)", "brand": "نيو بارك", "price": 340, "image": "images/391.jpg", "alt": "كريمة طبخ حيواني 800 غ نيو بارك", "category": "dairy" },
        { "name": "خلطة كبسة 25 غ بريستو", "title": "خلطة كبسة (25 غ)", "brand": "بريستو", "price": 40, "image": "images/392.jpg", "alt": "خلطة كبسة 25 غ بريستو", "category": "grains" },
        { "name": "خلطة دجاج مشوي 45 غ بريستو", "title": "خلطة دجاج مشوي (45 غ)", "brand": "بريستو", "price": 60, "image": "images/393.jpg", "alt": "خلطة دجاج مشوي 45 غ بريستو", "category": "grains" },
        { "name": "خلطة بشاميل 80 غ بريستو", "title": "خلطة بشاميل (80 غ)", "brand": "بريستو", "price": 80, "image": "images/394.jpg", "alt": "خلطة بشاميل 80 غ بريستو", "category": "grains" },
        { "name": "شوربة شعيرية 60 غ بريستو", "title": "شوربة شعيرية (60 غ)", "brand": "بريستو", "price": 60, "image": "images/395.jpg", "alt": "شوربة شعيرية 60 غ بريستو", "category": "grains" },
        { "name": "كريمة طبخ نباتي 160 غ نيو بارك", "title": "كريمة طبخ نباتي (160 غ)", "brand": "نيو بارك", "price": 100, "image": "images/396.jpg", "alt": "كريمة طبخ نباتي 160 غ نيو بارك", "category": "dairy" },
        { "name": "كريمة طبخ نباتي 800 غ نيو بارك", "title": "كريمة طبخ نباتي (800 غ)", "brand": "نيو بارك", "price": 260, "image": "images/397.jpg", "alt": "كريمة طبخ نباتي 800 غ نيو بارك", "category": "dairy" },
        { "name": "كريمة طبخ 750 مل هوى الشام", "title": "كريمة طبخ (750 مل)", "brand": "هوى الشام", "price": 280, "image": "images/398.jpg", "alt": "كريمة طبخ 750 مل هوى الشام", "category": "dairy" },
        { "name": "شوربة كريمة الدجاج 68 غ بريستو", "title": "شوربة كريمة الدجاج (68 غ)", "brand": "بريستو", "price": 60, "image": "images/399.jpg", "alt": "شوربة كريمة الدجاج 68 غ بريستو", "category": "grains" },
        { "name": "بودرة مرقة اللحم 10 غ بريستو", "title": "بودرة مرقة اللحم (10 غ)", "brand": "بريستو", "price": 10, "image": "images/400.jpg", "alt": "بودرة مرقة اللحم 10 غ بريستو", "category": "grains" }
    ];

    let cart = JSON.parse(localStorage.getItem('bosla_cart')) || [];
    let currentCat = 'all';
    let searchTimeout = null;

    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    const gridEl = $('#grid');
    const searchInput = $('#search');
    const countEl = $('#count');
    const emptyEl = $('#empty');
    const cartCountEl = $('#cartCount');
    const drawerCountEl = $('#drawerCount');
    const drawerEl = $('#drawer');
    const overlayEl = $('#overlay');
    const itemsContainer = $('#items');
    const totalEl = $('#total');
    const deliveryAreaSelect = $('#deliveryArea');
    const toastEl = $('#toast');
    const scrollTopBtn = $('#scrollTop');

    const cleanerWords = ['منظف','غسيل','مسحوق','مبيض','كلور','جلي','سائل جلي','صابون','شاور جل','شامبو','بلسم','جل شعر','بديل الزيت','معطر ملابس','مزيل بقع','ملمع زجاج','كريم قاشط','سوبر جل','فلاش','معقم للملابس','شفرات حلاقة','معجون حلاقة','فراشي سنان','معجون سنان'];

    function isCleanerProduct(p) {
        return p.category === 'cleaners' || cleanerWords.some(w => p.name.includes(w) || p.title.includes(w));
    }

    function getDeliveryFee(area) {
        return area === 'أشرفية صحنايا' ? 1200 : 70;
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function debounce(fn, delay) {
        return function (...args) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => fn.apply(this, args), delay);
        };
    }

    function renderProducts() {
        const query = searchInput.value.trim().toLowerCase();
        let filtered = window.PRODUCTS.filter(p => {
            let matchesCat = currentCat === 'all' || p.category === currentCat || (currentCat === 'rice' && p.name.includes('رز')) || (currentCat === 'cleaners' && isCleanerProduct(p)) || (currentCat === 'dairy' && (p.category === 'dairy' || p.name.includes('جبنة') || p.name.includes('لبنة') || p.name.includes('لبن ') || p.name.includes('زبدة')));
            let matchesQuery = !query || p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query);
            return matchesCat && matchesQuery;
        });

        const sortVal = $('#sort').value;
        if (sortVal === 'low') filtered.sort((a, b) => a.price - b.price);
        if (sortVal === 'high') filtered.sort((a, b) => b.price - a.price);
        if (sortVal === 'az') filtered.sort((a, b) => a.name.localeCompare(b.name, 'ar'));

        countEl.textContent = `عرض ${filtered.length} منتج`;

        if (filtered.length === 0) {
            gridEl.innerHTML = '';
            emptyEl.classList.remove('hidden');
            return;
        }
        emptyEl.classList.add('hidden');

        const fragment = document.createDocumentFragment();
        const tempContainer = document.createElement('div');

        filtered.forEach((p, i) => {
            const cartItem = cart.find(i => i.name === p.name);
            const qty = cartItem ? cartItem.qty : 0;

            let actionHTML;
            if (qty === 0) {
                actionHTML = `<button class="add-initial-btn" onclick="window._addItem('${escapeHtml(p.name).replace(/'/g, "\\'")}', ${p.price}, 1)"><i class="fa-solid fa-basket-shopping"></i> إضافة للسلة</button>`;
            } else {
                actionHTML = `<div class="qty-control"><button onclick="window._addItem('${escapeHtml(p.name).replace(/'/g, "\\'")}', ${p.price}, -1)"><i class="fa-solid fa-minus"></i></button><span>${qty}</span><button onclick="window._addItem('${escapeHtml(p.name).replace(/'/g, "\\'")}', ${p.price}, 1)"><i class="fa-solid fa-plus"></i></button></div>`;
            }

            tempContainer.innerHTML = `
                <div class="card" style="animation-delay: ${i * 0.05}s">
                    <div>
                        <div class="card-img"><img src="${p.image}" alt="${escapeHtml(p.alt)}" loading="lazy"></div>
                        <div class="brand">${escapeHtml(p.brand)}</div>
                        <h3>${escapeHtml(p.title)}</h3>
                    </div>
                    <div>
                        <div class="price-row"><span class="price">${p.price} <small>ل.س</small></span></div>
                        ${actionHTML}
                    </div>
                </div>
            `;
            const card = tempContainer.firstElementChild;
            fragment.appendChild(card);
        });

        gridEl.innerHTML = '';
        gridEl.appendChild(fragment);
    }

    function updateItemQty(name, price, change) {
        const itemIndex = cart.findIndex(i => i.name === name);

        if (itemIndex > -1) {
            cart[itemIndex].qty += change;
            if (cart[itemIndex].qty <= 0) {
                cart.splice(itemIndex, 1);
            }
        } else if (change > 0) {
            cart.push({ name, price, qty: 1 });
        }

        saveAndSyncCart();
        renderProducts();
        showToast();
    }

    window._addItem = updateItemQty;

    function saveAndSyncCart() {
        try {
            localStorage.setItem('bosla_cart', JSON.stringify(cart));
        } catch (e) {
            console.warn('Could not save cart to localStorage:', e);
        }
        updateCart();
    }

    function updateCart() {
        const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
        const itemsPrice = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

        const selectedArea = deliveryAreaSelect.value;
        const currentDeliveryFee = getDeliveryFee(selectedArea);
        const totalPrice = cart.length > 0 ? itemsPrice + currentDeliveryFee : 0;

        cartCountEl.textContent = totalQty;
        drawerCountEl.textContent = totalQty;
        totalEl.textContent = totalPrice + ` ل.س (شامل التوصيل ${currentDeliveryFee} ل.س)`;

        let html = cart.map((i, idx) => `
            <div class="cart-item" style="animation-delay: ${idx * 0.05}s">
                <div>
                    <div class="ci-name">${escapeHtml(i.name)}</div>
                    <div class="ci-sub">${i.price} ل.س × ${i.qty} = ${i.price * i.qty} ل.س</div>
                </div>
                <button onclick="window._removeFromCart('${escapeHtml(i.name).replace(/'/g, "\\'")}')" title="حذف"><i class="fa-solid fa-trash"></i></button>
            </div>
        `).join('') || '<p style="text-align:center; color:var(--muted); padding: 30px 0;"><i class="fa-solid fa-basket-shopping fa-2x" style="display:block; margin-bottom:10px; opacity:.5;"></i>السلة فارغة</p>';

        if (cart.length > 0) {
            html += `
                <div class="delivery-row">
                    <span>سعر التوصيل (${selectedArea})</span>
                    <span>${currentDeliveryFee} ل.س</span>
                </div>
            `;
        }

        itemsContainer.innerHTML = html;
    }

    window._removeFromCart = function (name) {
        cart = cart.filter(i => i.name !== name);
        saveAndSyncCart();
        renderProducts();
    };

    function showToast() {
        toastEl.style.display = 'flex';
        setTimeout(() => { toastEl.style.display = 'none'; }, 2000);
    }

    function sendMissingProduct() {
        const input = $('#missingProductInput');
        const val = input.value.trim();
        if (!val) {
            alert('يرجى كتابة اسم المنتج أولاً');
            return;
        }
        const text = `مرحباً، أريد طلب هذا المنتج غير الموجود في موقع بوصلة:%0A- ${val}`;
        window.open(`https://wa.me/963958953282?text=${text}`, '_blank');
        input.value = '';
    }

    window._showMissingForm = function () {
        const input = $('#missingProductInput');
        if (input) input.focus();
    };

    // Category switching
    $$('.cats button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            $$('.cats button').forEach(b => b.classList.remove('active'));
            const targetBtn = e.target.closest('button');
            if (targetBtn) {
                targetBtn.classList.add('active');
                currentCat = targetBtn.dataset.cat;
                renderProducts();
            }
        });
    });

    // Show all sections
    $('#showAllSections').addEventListener('click', () => {
        const allBtn = $('.cats button[data-cat="all"]');
        $$('.cats button').forEach(b => b.classList.remove('active'));
        allBtn.classList.add('active');
        currentCat = 'all';
        $('#sort').value = 'default';
        searchInput.value = '';
        renderProducts();
        $('#products').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Search with debounce
    const debouncedSearch = debounce(renderProducts, 200);
    searchInput.addEventListener('input', debouncedSearch);
    $('#sort').addEventListener('change', renderProducts);
    $('#clear').addEventListener('click', () => { searchInput.value = ''; renderProducts(); });
    $('#reset').addEventListener('click', () => {
        searchInput.value = '';
        currentCat = 'all';
        const allBtn = $('.cats button[data-cat="all"]');
        $$('.cats button').forEach(b => b.classList.remove('active'));
        if (allBtn) allBtn.classList.add('active');
        renderProducts();
    });

    // Drawer cart
    $('#openCart').addEventListener('click', () => {
        drawerEl.classList.add('active');
        overlayEl.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    $('#closeCart').addEventListener('click', closeDrawer);
    overlayEl.addEventListener('click', closeDrawer);

    function closeDrawer() {
        drawerEl.classList.remove('active');
        overlayEl.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Send order
    $('#send').addEventListener('click', () => {
        const nameInput = $('#custName');
        const addressInput = $('#custAddress');
        const nameError = $('#nameError');
        const addressError = $('#addressError');

        let isValid = true;

        if (!nameInput.value.trim()) {
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        if (!addressInput.value.trim()) {
            addressError.style.display = 'block';
            isValid = false;
        } else {
            addressError.style.display = 'none';
        }

        if (!isValid) return;

        const selectedArea = deliveryAreaSelect.value;
        const currentDeliveryFee = getDeliveryFee(selectedArea);
        const itemsPrice = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
        const totalPrice = itemsPrice + currentDeliveryFee;

        let text = `طلب جديد من متجر بوصلة:%0Aالاسم: ${escapeHtml(nameInput.value)}%0Aمنطقة التوصيل: ${escapeHtml(selectedArea)}%0Aالعنوان: ${escapeHtml(addressInput.value)}%0A%0Aالطلبات:%0A`;
        cart.forEach(i => { text += `- ${escapeHtml(i.name)} (${i.qty}) - ${i.price * i.qty} ل.س%0A`; });
        text += `%0Aسعر التوصيل: ${currentDeliveryFee} ل.س (${selectedArea})%0A`;
        text += `المجموع الكلي: ${totalPrice} ل.س`;

        window.open(`https://wa.me/963958953282?text=${text}`, '_blank');
    });

    // Scroll to top button
    function createScrollTopButton() {
        const btn = document.createElement('button');
        btn.id = 'scrollTop';
        btn.className = 'scroll-top';
        btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
        btn.setAttribute('aria-label', 'العودة للأعلى');
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            const visible = window.scrollY > 400;
            btn.classList.toggle('visible', visible);
        }, { passive: true });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            $('.header').classList.toggle('scrolled', window.scrollY > 10);
        }, { passive: true });
    }

    createScrollTopButton();

    window.sendMissingProduct = sendMissingProduct;
    window.updateCart = updateCart;

    // Init
    updateCart();
    renderProducts();

    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });

    // Focus trap for drawer
    drawerEl.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;
        const focusable = drawerEl.querySelectorAll('button, input, select, a[href], [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });

})();

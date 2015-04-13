var mockedData = function() {
    angular.module('mockedData', [])
            .value('getProfile', {"items": [{"badge_counts": {"bronze": 0, "silver": 0, "gold": 0}, "account_id": 5169139, "is_employee": false, "last_access_date": 1428792043, "reputation_change_year": 0, "reputation_change_quarter": 0, "reputation_change_month": 0, "reputation_change_week": 0, "reputation_change_day": 0, "reputation": 1, "creation_date": 1413216767, "user_type": "registered", "user_id": 4138254, "link": "http://stackoverflow.com/users/4138254/em-as", "display_name": "Em as", "profile_image": "https://lh3.googleusercontent.com/-RdJHuQ-r5fg/AAAAAAAAAAI/AAAAAAAAMkY/0k17veAHPY8/photo.jpg?sz=128"}], "has_more": false, "quota_max": 10000, "quota_remaining": 9997, "total": 1})

            ;
};
module.exports = mockedData;
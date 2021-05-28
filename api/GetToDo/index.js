const data = [
    {
        "_id": "60b070dfa792c98ca2871bad",
        "index": 0,
        "guid": "dc08a782-1739-4f69-9a71-9c839c9b59a8",
        "isActive": false,
        "title": "Nulla enim officia proident ut non mollit ad excepteur irure aliquip nulla eu. Aliquip irure qui elit consequat ad ea deserunt est est minim proident. Veniam id et et irure cupidatat ullamco consectetur proident occaecat.\r\n"
    },
    {
        "_id": "60b070df3a01428b97d77cbc",
        "index": 1,
        "guid": "7a4860b0-8c2c-4eb1-a4ca-27a6c1f5c657",
        "isActive": false,
        "title": "Cillum elit consectetur excepteur laboris minim ad proident ea ut irure ex tempor proident. Ipsum veniam veniam veniam do proident duis ex ullamco dolor ex. Fugiat cillum sit commodo culpa magna elit nulla nostrud id. Sit dolore incididunt sit quis.\r\n"
    },
    {
        "_id": "60b070dffd0dce061a6cc47e",
        "index": 2,
        "guid": "302b1685-dc93-4921-9846-918938ae4692",
        "isActive": true,
        "title": "Duis enim incididunt incididunt mollit elit enim in nisi. Adipisicing nostrud dolor do quis Lorem aliqua mollit quis laborum do. Eiusmod ea ullamco cillum tempor enim consectetur ex fugiat eiusmod laboris amet ad reprehenderit mollit.\r\n"
    },
    {
        "_id": "60b070df7aa99f841f6fa3de",
        "index": 3,
        "guid": "bea7eea6-a487-40df-88e1-8728aab55d46",
        "isActive": false,
        "title": "Nulla laboris deserunt ex in labore ullamco ipsum quis ad adipisicing aliqua. Est ullamco sint occaecat velit exercitation nulla adipisicing Lorem exercitation officia nulla nostrud cillum cupidatat. Commodo commodo enim esse cillum commodo cillum eiusmod id esse sint nulla.\r\n"
    },
    {
        "_id": "60b070df60d915dfda397070",
        "index": 4,
        "guid": "5f11bd1a-c2fc-443a-b37f-2bb143f560af",
        "isActive": true,
        "title": "Laboris irure cupidatat nostrud nostrud eu duis laborum labore anim sit aliqua. Deserunt minim nostrud nostrud voluptate voluptate velit dolore nulla aliqua sint cupidatat ipsum. Deserunt eu non anim excepteur incididunt mollit ad fugiat ad aliqua ex consequat esse. Mollit magna excepteur anim mollit commodo eu voluptate est tempor. Aliqua id exercitation adipisicing cupidatat amet magna. Voluptate excepteur exercitation aute anim non voluptate labore laboris sit elit incididunt. Laborum commodo officia nisi non dolore qui consectetur ullamco pariatur duis nulla voluptate proident dolore.\r\n"
    },
    {
        "_id": "60b070dfe2096ba93228234c",
        "index": 5,
        "guid": "599d98f5-2750-4364-a060-4c9755df6b5f",
        "isActive": false,
        "title": "Laborum dolor cupidatat dolor cupidatat. Quis enim elit tempor tempor irure qui ipsum sit commodo cupidatat ex sunt. Cupidatat do non proident laborum minim consequat dolor eiusmod tempor.\r\n"
    },
    {
        "_id": "60b070dfca105e1410941fe7",
        "index": 6,
        "guid": "98c1b6b6-c6d9-4ce2-89c2-d9d0c683abe8",
        "isActive": true,
        "title": "Eu dolore voluptate exercitation aliquip occaecat veniam. Voluptate pariatur cupidatat nulla adipisicing officia. Anim sunt deserunt ipsum esse quis amet aute magna exercitation ullamco dolor dolore. Tempor minim incididunt aute labore irure. Id pariatur tempor esse ipsum officia enim irure duis aliqua. Deserunt esse qui Lorem consectetur culpa Lorem non in ut veniam nisi.\r\n"
    }
]
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: data
    };
}
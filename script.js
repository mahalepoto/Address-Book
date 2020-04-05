var adBook = (function() {
    // default fields for understanding and testing search
    var pplDetails = [{
        firstName: 'Sam',
        lastName: 'Smith',
        phone: '004477995544',
        address: '33 jump st, London'
    }];

    //variables declaration
    let table = $('#table1');
        tbody = table.find('tbody');
        $firstName = table.find('#firstName');
        $lastName = table.find('#lastName');
        $phone = table.find('#phone');
        $address = table.find('#address');
        $button = table.find('#add');
        $btnRemove = table.find('#remove');
        $input = table.find(".edit");


    //events calls
    $button.on('click', adPerson);
    table.on('click', '#remove', delPerson);
    build();



    //function to create new table data
    function build() {
        tbody.html('');
        var length = pplDetails.length;
        for (var i = 0; i < length; i++) {
            table.prepend('<tr data-id="' + i + '"><td>' + pplDetails[i].firstName + '</td> <td>' + pplDetails[i].lastName + '</td> <td>' + pplDetails[i].phone + '</td> <td>' + pplDetails[i].address + '</td> <td> <button id="remove" class="btn btn-block">Del</button></td></tr>');
        }
    }

    //function to add persons details
    function adPerson() {
        var data = {
            firstName: $firstName.val(),
            lastName: $lastName.val(),
            phone: $phone.val(),
            address: $address.val()
        };
        pplDetails.push(data);
        $firstName.val('');
        $lastName.val('');
        $phone.val('');
        $address.val('');
        build();
    }

    //function to delete persons details
    function delPerson() {
        var element = $(this).parents('tr').attr('data-id');
        pplDetails.splice(element, 1);
        build();
    }



    // Search bar
    $(document).ready(function() {
        $('#myInput').on('keyup', function() {
            var value = $(this).val().toLowerCase();
            var look = $('table tbody').find('tr');
            $(look).filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });


})();
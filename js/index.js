$(function() {
    $('.input-btn').click(function() {
        var student = $('#student').val().trim()
        var address = $('#address').val().trim()
        var location = $('#location').val().trim()
        if (student.length <= 0 || address.length <= 0 || location.length <= 0) {
            alert('请填写完整的信息');
        } else {
            if (/^[0-9]{12}$/.test(student)) {
                var settings = {
                    "url": "https://lkn-3gx077bh4bae4460-1259617372.ap-shanghai.app.tcloudbase.com/addData?StudentCity=" + address + "&StudentLocation=" + location + "&StudentStatus=" + "1" + "&StudentId=" + student,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Origin": "lkn-3gx077bh4bae4460-1259617372.ap-shanghai.app.tcloudbase.com",
                        "User-Agent": "apifox/1.0.0 (https://www.apifox.cn)"
                    },
                };

                $.ajax(settings).done(function(response) {
                    if (response.data === "添加成功") {
                        alert("添加成功")
                    } else if (response.data === "用户存在") {
                        alert("用户存在")
                    } else(alert("添加失败"))

                });
            } else {
                alert('学号格式有误,请填写12位数字');
            }

        }
    })
})
$(document).ready(function() {
    $("#encrypt-btn").click(function() {
        let key = $("#key").val();
        let message = $("#message").val();
        let status = $("#en-de-status").is(":checked");

        if (status === true) {
            var encrypted = CryptoJS.AES.encrypt(message, key);
            $("#output").val(encrypted.toString());
        } else {
            var decrypted = CryptoJS.AES.decrypt(message, key);
            $("#output").val(decrypted.toString(CryptoJS.enc.Utf8));
        }
    });
});

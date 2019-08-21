<!DOCTYPE html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="">
	<meta name="subject" content="">

	<!-- Favicon Icon -->
	<link rel="shortcut icon" type="image/x-icon" href="<?php echo site_url("assets/img/admin/favicon.ico"); ?>">
	<link rel="icon" type="image/png" href="<?php echo site_url("assets/img/admin/favicon.png"); ?>">
	<link rel="apple-touch-icon" href="<?php echo site_url("assets/img/admin/avicon.png"); ?>">

	<!-- CSS -->
	<link rel="stylesheet" href="<?php echo site_url("assets/vendor/bootstrap/css/bootstrap.css"); ?>">
	<link rel="stylesheet" href="<?php echo site_url("assets/vendor/fontawesome/css/font-awesome.min.css"); ?>">
	<link rel="stylesheet" href="<?php echo site_url(config("css")); ?>">
</head>
<body>

	<!-- Wrapper -->
	<div class="wrapper">

		<!-- Main Content -->
		<main class="content">

            <?php $this->view("sections/menu", $data); ?>

			<!-- Page Content -->
			<div class="container-fluid">

                <?php $this->view("sections/welcome_section_1", $data); ?>

                <?php $this->view("sections/welcome_section_2", $data); ?>

			</div>
			<!-- End Page Content -->

            <?php $this->view("sections/footer", $data); ?>

		</main>
		<!-- End Main Content -->

    </div>
    <!-- End Wrapper -->

    <!-- Base Javascript -->
	<script src="<?php echo site_url("assets/vendor/jquery/jquery-3.3.1.min.js"); ?>" type="text/javascript"></script>
	<script src="<?php echo site_url("assets/vendor/bootstrap/js/popper.min.js"); ?>" type="text/javascript"></script>
	<script src="<?php echo site_url("assets/vendor/bootstrap/js/bootstrap.min.js"); ?>" type="text/javascript"></script>

</body>
</html>

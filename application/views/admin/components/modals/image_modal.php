<!-- modal -->
<div class="modal" id="image-modal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">

        <!-- modal header -->
        <div class="modal-header bg-light">
            <h5 class="modal-title">Featured Image</h5>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- modal body -->
        <div class="modal-body bg-light">
            <?php if (!empty($media_info)): ?>
            <div class="d-flex flex-wrap align-content-start">
                <?php foreach ($media_info as $media): ?>
                    <div class="m-1">
                        <img src="<?php echo site_url('assets/img/uploads').'/'.$media['name']; ?>" data-media="<?php echo site_url('assets/img/uploads').'/'.$media['name']; ?>" class="img-thumbnail img-fluid modal-image">
                    </div>
                <?php endforeach; ?>
            </div>
            <?php else: ?>
                <h6 class="text-center m-5 p-5">No images have been uploaded yet... <a href="<?php echo site_url('admin/media/upload'); ?>">Upload Images</a></h6>
            <?php endif; ?>
        </div>

        <!-- modal footer -->
        <div class="modal-footer bg-light">
            <a href="<?php echo site_url('admin/media/upload'); ?>" class="btn btn-outline-primary" role="button">Upload Image</a>
            <button type="button" class="btn btn-primary" id="image-btn" data-dismiss="modal">Select</button>
        </div>

        </div>
    </div>
</div>
<!-- End modal -->
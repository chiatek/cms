<?php

class Home extends Frontend_Controller {

    // --------------------------------------------------------------------

    /**
     * Class constructor
     *
     * @return	void
     */

    public function __construct() {
        parent::__construct();
    }

    // --------------------------------------------------------------------

    /**
     * Index
     *
     * @return	void
     */

    public function index() {
        // Verify page exists or show 404
        if (!file_exists(path('pages').'/index.php')) {
            show_error_404();
        }

        // Load the view
        $this->view('pages/index', $this->data);
    }

}

?>

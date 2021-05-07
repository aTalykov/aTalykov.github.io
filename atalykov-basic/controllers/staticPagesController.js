export class StaticPagesController {
    static index(res) {
        res.render('static_pages/index', { company: 'La Squadra', main_title: 'Index' })
    }
    static about(res) {
        res.render('static_pages/about', { main_title: 'About Us' })
    }
}
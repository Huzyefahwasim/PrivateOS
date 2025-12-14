export function Footer() {
    return (
        <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 className="text-[var(--text-primary)] font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-[var(--text-secondary)]">
                            <li><a href="#" className="hover:text-[var(--accent)]">Authenticator</a></li>
                            <li><a href="#" className="hover:text-[var(--accent)]">Drive</a></li>
                            <li><a href="#" className="hover:text-[var(--accent)]">Chat</a></li>
                            <li><a href="#" className="hover:text-[var(--accent)]">AI</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[var(--text-primary)] font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-[var(--text-secondary)]">
                            <li><a href="#" className="hover:text-[var(--accent)]">About</a></li>
                            <li><a href="#" className="hover:text-[var(--accent)]">Blog</a></li>
                            <li><a href="#" className="hover:text-[var(--accent)]">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[var(--text-primary)] font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-[var(--text-secondary)]">
                            <li><a href="#" className="hover:text-[var(--accent)]">Documentation</a></li>
                            <li><a href="#" className="hover:text-[var(--accent)]">Help Center</a></li>
                            <li><a href="#" className="hover:text-[var(--accent)]">Privacy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[var(--text-primary)] font-bold mb-4">Social</h4>
                        <ul className="space-y-2 text-[var(--text-secondary)]">
                            <li><a href="#" className="hover:text-[var(--accent)]">Twitter</a></li>
                            <li><a href="#" className="hover:text-[var(--accent)]">Discord</a></li>
                            <li><a href="#" className="hover:text-[var(--accent)]">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-[var(--border)] text-center text-[var(--text-muted)] text-sm">
                    © {new Date().getFullYear()} PrivateOS Clone. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

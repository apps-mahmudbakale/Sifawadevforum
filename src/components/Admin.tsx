import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Plus, Trash2, Film, BookOpen, Coins, Heart, Wrench, Shield, School, Database, AlertCircle, CheckCircle2 } from 'lucide-react';

// Import local assets for migration
import Career from '../projects/Career.png';
import Jamb from '../projects/Jamb.png';
import Workshop from '../projects/workshop.png';
import Skills from '../projects/skills.png';
import Makabarta from '../projects/Makabarta.png';
import Wells from '../projects/Wells.png';
import VideoAsset from '../VIDEO-2025-12-14-15-22-49.mp4';

const iconMap: Record<string, any> = {
    BookOpen, Coins, Heart, Wrench, Shield, School
};

export default function Admin() {
    const [gallery, setGallery] = useState<any[]>([]);
    const [activities, setActivities] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState<'gallery' | 'activities' | 'migration'>('gallery');
    const [migrationStatus, setMigrationStatus] = useState<{ status: 'idle' | 'running' | 'success' | 'error', message: string }>({ status: 'idle', message: '' });

    // Form states
    const [galleryForm, setGalleryForm] = useState({ url: '', caption: '', type: 'image' });
    const [activityForm, setActivityForm] = useState({ title: '', description: '', image: '', color: 'blue', icon_name: 'Coins' });
    const [isUploading, setIsUploading] = useState(false);

    const toBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const { data: galleryData } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
        const { data: activitiesData } = await supabase.from('activities').select('*').order('created_at', { ascending: false });

        setGallery(galleryData || []);
        setActivities(activitiesData || []);
        setLoading(false);
    };

    const handleMigrate = async () => {
        setMigrationStatus({ status: 'running', message: 'Starting migration...' });

        try {
            const staticGallery = [
                { url: Career, caption: 'Career Guidance for Students', type: 'image' },
                { url: Workshop, caption: 'SSCE/JAMB Success Workshop', type: 'image' },
                { url: Jamb, caption: 'JAMB Forms Distribution', type: 'image' },
                { url: Skills, caption: 'Skills Acquisition Training', type: 'image' },
                { url: Makabarta, caption: 'Makabarta Gate Project', type: 'image' },
                { url: Wells, caption: 'Community Well Excavation', type: 'image' },
                { url: VideoAsset, caption: 'SDF Highlight Video', type: 'video' }
            ];

            const staticActivities = [
                { icon_name: 'Coins', title: 'CAREER GUIDANCE FOR STUDENTS FEB, 2024', description: 'A comprehensive session providing students with professional insights into career paths, academic choices, and future opportunities to help them build a successful future.', image: Career, color: 'blue' },
                { icon_name: 'Heart', title: 'SSCE/JAMB/CBT SUCCESS TIPS WORKSHOP FOR SS III STUDENTS, FEB 2024', description: 'An intensive workshop equipping SS III students with essential study strategies, exam techniques, and CBT navigation skills to maximize their success in national examinations.', image: Workshop, color: 'yellow' },
                { icon_name: 'Wrench', title: 'DISTRIBUTION OF 95 JAMB FORMS FEB, 2024', description: 'Supporting educational advancement by purchasing and distributing 95 JAMB registration forms to deserving students, removing financial barriers to higher education.', image: Jamb, color: 'blue' },
                { icon_name: 'School', title: 'PROCUREMENT OF MACHINE AND TOOLS; EMPOWERMENT OF 2 YOUTHS: 6 MONTHS SKILLS ACQUISITION TRAINING, FEB - JULY, 2024', description: 'A dedicated 6-month skills acquisition program coupled with the provision of machines and tools to empower youths with practical vocational skills for self-reliance.', image: Skills, color: 'yellow' },
                { icon_name: 'Shield', title: 'FIXING OF MAKABARTA  GATE AND DU’A BOARD, JAN, 2024', description: 'Community service project focused on the repair and installation of the cemetery (Makabarta) gate and Du’a board, ensuring dignity and reverence for the resting place.', image: Makabarta, color: 'blue' },
                { icon_name: 'BookOpen', title: 'RE-EXCAVATION OF 15 WELLS IN SIFAWA, MARCH, 2024 ', description: 'Addressing community water needs by rehabilitating and re-excavating 15 wells across Sifawa, improving access to clean and reliable water sources.', image: Wells, color: 'yellow' }
            ];

            setMigrationStatus({ status: 'running', message: 'Inserting Gallery items...' });
            const { error: galleryError } = await supabase.from('gallery').insert(staticGallery);
            if (galleryError) throw galleryError;

            setMigrationStatus({ status: 'running', message: 'Inserting Activities...' });
            const { error: activityError } = await supabase.from('activities').insert(staticActivities);
            if (activityError) throw activityError;

            setMigrationStatus({ status: 'success', message: 'Migration completed successfully! All items pushed to Supabase.' });
            fetchData();
        } catch (error: any) {
            console.error('Migration failed:', error);
            setMigrationStatus({ status: 'error', message: `Migration failed: ${error.message}. Please make sure you have run the schema.sql in your Supabase dashboard.` });
        }
    };

    const handleAddGallery = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!galleryForm.url) return alert('Please select a file first.');

        setIsUploading(true);
        const { error } = await supabase.from('gallery').insert([galleryForm]);
        setIsUploading(false);

        if (!error) {
            setGalleryForm({ url: '', caption: '', type: 'image' });
            fetchData();
        } else {
            alert('Upload failed: ' + error.message);
        }
    };

    const handleAddActivity = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!activityForm.image) return alert('Please select an image first.');

        setIsUploading(true);
        const { error } = await supabase.from('activities').insert([activityForm]);
        setIsUploading(false);

        if (!error) {
            setActivityForm({ title: '', description: '', image: '', color: 'blue', icon_name: 'Coins' });
            fetchData();
        } else {
            alert('Upload failed: ' + error.message);
        }
    };

    const handleDelete = async (table: string, id: string) => {
        if (confirm('Are you sure you want to delete this item?')) {
            const { error } = await supabase.from(table).delete().eq('id', id);
            if (!error) fetchData();
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <div className="flex bg-white rounded-xl shadow-sm p-1">
                        <button
                            onClick={() => setView('gallery')}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${view === 'gallery' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            Gallery
                        </button>
                        <button
                            onClick={() => setView('activities')}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${view === 'activities' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            Activities
                        </button>
                        <button
                            onClick={() => setView('migration')}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${view === 'migration' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            Setup / Migrate
                        </button>
                    </div>
                </div>

                {view === 'migration' ? (
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                    <Database size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Database Migration</h2>
                                    <p className="text-gray-600 text-sm">Transfer hardcoded data to your Supabase tables</p>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl mb-8 flex gap-3 text-blue-800 text-sm">
                                <AlertCircle className="shrink-0" size={20} />
                                <div>
                                    <p className="font-bold mb-1">Before you start:</p>
                                    <p>Check if you have successfully run the <strong>schema.sql</strong> script in your Supabase SQL Editor. This will create the `gallery` and `activities` tables.</p>
                                </div>
                            </div>

                            {migrationStatus.status !== 'idle' && (
                                <div className={`p-4 rounded-xl mb-6 flex gap-3 ${migrationStatus.status === 'success' ? 'bg-green-50 text-green-800' :
                                    migrationStatus.status === 'error' ? 'bg-red-50 text-red-800' :
                                        'bg-gray-50 text-gray-800'
                                    }`}>
                                    {migrationStatus.status === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                                    <p>{migrationStatus.message}</p>
                                </div>
                            )}

                            <button
                                disabled={migrationStatus.status === 'running'}
                                onClick={handleMigrate}
                                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-50"
                            >
                                {migrationStatus.status === 'running' ? 'Migrating...' : (
                                    <>
                                        <Database size={20} />
                                        Migrate Existing Data
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ) : view === 'gallery' ? (
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Plus size={20} className="text-blue-600" />
                                    Add New Item
                                </h2>
                                <form onSubmit={handleAddGallery} className="space-gap-4 flex flex-col gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                                        <select
                                            value={galleryForm.type}
                                            onChange={(e) => setGalleryForm({ ...galleryForm, type: e.target.value })}
                                            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                                        >
                                            <option value="image">Image</option>
                                            <option value="video">Video</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload File (Image or Video)</label>
                                        <input
                                            type="file"
                                            required
                                            accept={galleryForm.type === 'image' ? 'image/*' : 'video/*'}
                                            onChange={async (e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    try {
                                                        const base64 = await toBase64(file);
                                                        setGalleryForm({ ...galleryForm, url: base64 });
                                                    } catch (err) {
                                                        alert('File conversion failed');
                                                    }
                                                }
                                            }}
                                            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Caption</label>
                                        <input
                                            type="text"
                                            required
                                            value={galleryForm.caption}
                                            onChange={(e) => setGalleryForm({ ...galleryForm, caption: e.target.value })}
                                            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                                            placeholder="Enter caption..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isUploading}
                                        className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 disabled:opacity-50"
                                    >
                                        {isUploading ? 'Uploading...' : 'Add to Gallery'}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {gallery.length === 0 ? (
                                    <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded-2xl shadow-sm border border-dashed">
                                        No items found. Use the form to add one or migrate data.
                                    </div>
                                ) : gallery.map((item) => (
                                    <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                        <div className="relative h-48">
                                            {item.type === 'image' ? (
                                                <img src={item.url} alt={item.caption} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-black flex items-center justify-center">
                                                    <Film className="text-white" size={40} />
                                                </div>
                                            )}
                                            <button
                                                onClick={() => handleDelete('gallery', item.id)}
                                                className="absolute top-2 right-2 p-2 bg-red-100 text-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                        <div className="p-4">
                                            <p className="font-medium text-gray-900 truncate">{item.caption}</p>
                                            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{item.type}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Plus size={20} className="text-blue-600" />
                                    Add New Activity
                                </h2>
                                <form onSubmit={handleAddActivity} className="flex flex-col gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                        <input
                                            type="text"
                                            required
                                            value={activityForm.title}
                                            onChange={(e) => setActivityForm({ ...activityForm, title: e.target.value })}
                                            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                                        <input
                                            type="file"
                                            required
                                            accept="image/*"
                                            onChange={async (e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    try {
                                                        const base64 = await toBase64(file);
                                                        setActivityForm({ ...activityForm, image: base64 });
                                                    } catch (err) {
                                                        alert('File conversion failed');
                                                    }
                                                }
                                            }}
                                            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                                        <select
                                            value={activityForm.icon_name}
                                            onChange={(e) => setActivityForm({ ...activityForm, icon_name: e.target.value })}
                                            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                                        >
                                            {Object.keys(iconMap).map(icon => (
                                                <option key={icon} value={icon}>{icon}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Color Theme</label>
                                        <select
                                            value={activityForm.color}
                                            onChange={(e) => setActivityForm({ ...activityForm, color: e.target.value })}
                                            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                                        >
                                            <option value="blue">Blue</option>
                                            <option value="yellow">Yellow</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                        <textarea
                                            required
                                            rows={3}
                                            value={activityForm.description}
                                            onChange={(e) => setActivityForm({ ...activityForm, description: e.target.value })}
                                            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isUploading}
                                        className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 disabled:opacity-50"
                                    >
                                        {isUploading ? 'Uploading...' : 'Add Activity'}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="space-y-4">
                                {activities.length === 0 ? (
                                    <div className="py-12 text-center text-gray-500 bg-white rounded-2xl shadow-sm border border-dashed">
                                        No activities found. Use the form to add one or migrate data.
                                    </div>
                                ) : activities.map((activity) => {
                                    const Icon = iconMap[activity.icon_name] || Coins;
                                    return (
                                        <div key={activity.id} className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm group">
                                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${activity.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'}`}>
                                                <Icon size={32} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-gray-900 truncate">{activity.title}</h4>
                                                <p className="text-sm text-gray-500 line-clamp-1">{activity.description}</p>
                                            </div>
                                            <button
                                                onClick={() => handleDelete('activities', activity.id)}
                                                className="p-2 bg-red-100 text-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

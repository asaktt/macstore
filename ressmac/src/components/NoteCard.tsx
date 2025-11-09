import React from 'react';
import { Note } from '../types';

interface NoteCardProps {
    note: Note;
}

const BulletPoint: React.FC<{ text: string }> = ({ text }) => {
    const formatText = (txt: string) => {
        return txt
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
    };

    return (
        <li className="flex items-start">
            <i className="fas fa-dot-circle text-indigo-400 mr-3 mt-1 flex-shrink-0"></i>
            <span dangerouslySetInnerHTML={{ __html: formatText(text) }} />
        </li>
    );
}

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
    return (
        <div className="bg-indigo-50/70 border-l-4 border-indigo-400 p-6 rounded-r-lg mt-10 text-slate-800">
            <p className="font-semibold text-lg mb-4 text-indigo-900">📌 {note.title}</p>
            {note.points.length > 0 && (
                <ul className="space-y-2 text-sm text-slate-700">
                    {note.points.map((point, index) => <BulletPoint key={index} text={point} />)}
                </ul>
            )}
            
            {note.guidesTitle && note.guideLinks && (
                 <>
                    <p className="font-semibold text-lg mt-6 mb-3 text-indigo-900">📖 {note.guidesTitle}</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                        {note.guideLinks.map((link, index) => (
                             <li key={index} className="flex items-start">
                                <i className="fas fa-link text-indigo-400 mr-3 mt-1 flex-shrink-0"></i>
                                <span>
                                    {link.text}: <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">Lihat Panduan</a>
                                </span>
                             </li>
                        ))}
                    </ul>
                 </>
            )}

            {note.footerText && (
                <p className="mt-6 text-center italic font-semibold text-amber-800 bg-amber-100 p-3 rounded-lg shadow-inner">
                    {note.footerText}
                </p>
            )}
        </div>
    );
};